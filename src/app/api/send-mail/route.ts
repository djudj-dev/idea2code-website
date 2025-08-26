import { formSchema } from "@/lib/models";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer"
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

export const POST: NextApiHandler = async (
  req,
  res: any
) => {
  // super affreux je sais
  const data  = await (req as any).json() ;
  const formData = formSchema.parse(data)

  const mailPayload = mailOptionGenerator(formData)
  const info = await transporter.sendMail(mailPayload);

  return NextResponse.json(
    {info: info },
    {
      status: 200,
    }
  ) 
}