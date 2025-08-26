import { NextRequest } from "next/server";
import nodemailer from "nodemailer"
import { kv } from '@vercel/kv';
import { Ratelimit } from '@upstash/ratelimit';
import { formSchema } from "@/lib/models";
import z from "zod";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.PASS,
  },
});

const mailOptionGenerator = ({
    email, 
    projectInfo, 
    projectType, 
    budget, 
    firstName, 
    lastName, 
    phone,
    society
}: z.infer<typeof formSchema>) => {
    const from = process.env.EMAIL_FROM;
    const to = process.env.EMAIL_FOR;
    const subject = `Contact projet: ${projectType}`
    const text = `
        Prise de contact pour un projet de type : ${projectType}

        Info :
        - Nom : ${lastName}
        - Prenom : ${firstName}
        - Société : ${society?.length ? society : "Non renseignée"}
        - Budjet : ${budget}
        
        - Description du projet :
        ${projectInfo?.length ? projectInfo : "Non renseignée"}
        
        Coordonée :
        - email: ${email}
        - téléphone ${phone?.length ? phone : "non renseignée"}
    `
    return {
        from,
        to,
        subject,
        text
    }
}

const rateLimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(1, '1 m'), // 1 requests in 1 minute
});

export const POST = async (req: NextRequest) => {
 
  const ip = req.headers.get('x-forwarded-for') || '127.0.0.1'

  console.log('ip :', ip)
  const redisData = await rateLimit.limit(`ratelimit_${ip}`);

  console.log(redisData)

  if(!redisData.success) {
    return Response.json(
      { message: 'Too many requests' },
      {
        status: 429,
      }
    )
  } 

  const data  = await req.json();
  const formData = formSchema.parse(data)

  const mailPayload = mailOptionGenerator(formData)
  const info = await transporter.sendMail(mailPayload);

  return Response.json(
     { message: 'Email send' },
    {
      status: 200,
    }
  ) 
}