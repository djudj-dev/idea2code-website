'use client'

import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ShineBorder } from './magicui/shine-border';
import { Typography } from './typography';
import { Form, FormField } from './ui/form';
import { flattenError, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/lib/models';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { useAptabase } from '@aptabase/react';

export const ContactForm = ({ className }: { className?: string }) => {
    const searchParams = useSearchParams();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            projectType: z.string().safeParse(searchParams.get('projectType')).data || undefined,
        },
    });

    const { trackEvent } = useAptabase()
    const { register, handleSubmit } = form;
    const router = useRouter();
    const [isSending, setSending] = useState(false);

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        trackEvent('submiting-contact-form');
        setSending(true);
            fetch('/api/send-mail', {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            }).then((v) => {
                toast(
                    <div className="flex items-center">
                        <Send/>
                        <Typography.Large>Email envoyé !</Typography.Large>
                    </div>,
                    {
                        className: 'z-50 text-white! bg-card! border-white/15!',
                        duration: 2000,
                    }
                )
                router.push('/')
            })        
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={`md:grid block grid-rows md:grid-rows-none md:grid-cols-2 m-auto ${className}`}>
                <div className='p-4'>
                    <Label className="mb-2" htmlFor="firstname">Prénom*</Label>
                    <Input disabled={isSending} className="rounded" id='firstname' type="text" {...register("firstName", { required: false, maxLength: 80 })} />
                </div>
                <div className='p-4'>
                    <Label className="mb-2" htmlFor="last">Nom*</Label>
                    <Input disabled={isSending} className="rounded" id='lastname' type="text" {...register("lastName", { required: false, maxLength: 100 })} />
                </div>
                <div className='p-4'>
                    <Label className="mb-2" htmlFor="email">Email*</Label>
                    <Input disabled={isSending} className="rounded" id='email' type="text" {...register("email", { required: false, pattern: /^\S+@\S+$/i })} />
                </div>
                <div className='p-4'>
                    <Label className="mb-2" htmlFor="phone">Numéro de Téléphone</Label>
                    <Input disabled={isSending} className="rounded" id='phone' type="tel" {...register("phone", { minLength: 6, maxLength: 12 })} />
                </div>
                <div className='p-4'>
                    <Label className="mb-2" htmlFor="society">Société</Label>
                    <Input disabled={isSending} className="rounded" id='society' type="text"  {...register("society")} />
                </div>
                <div></div>
                <FormField 
                    name='projectType'
                    rules={{required: true}}
                    render={({ field }) => (
                        <div className='p-4'>
                            <Label className="mb-2" htmlFor="projectType">Type de Projet*</Label>
                            <Select disabled={isSending} onValueChange={field.onChange} {...register("budget", {required: true})} defaultValue={field.value}>
                                <SelectTrigger className="w-full rounded">
                                    <SelectValue  placeholder="Quel type de projet ?" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="landingpage">Landing Page</SelectItem>
                                        <SelectItem value="vitrinewebsite">Site Vitrine</SelectItem>
                                        <SelectItem value="SaaS">SaaS</SelectItem>
                                        <SelectItem value="Intervention">{`Intervention D'app`}</SelectItem>
                                        <SelectItem value="other">Autre</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    )}
                />
                <FormField 
                    name='budget'
                    rules={{ required: true}}
                    render={({ field }) => (
                        <div className='p-4'>
                            <Label className="mb-2" htmlFor="budjet">Votre budget*</Label>
                            <Select disabled={isSending} onValueChange={field.onChange} {...register("budget", {required: true})} defaultValue={field.value} >
                                <SelectTrigger id="budjet" className="w-full rounded">
                                    <SelectValue placeholder="Choisissez votre budget" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value=" >1000"> 1 000€</SelectItem>
                                        <SelectItem value=" 1000 - 2000"> 1 000€ - 2 000€</SelectItem>
                                        <SelectItem value=" 2000 - 5000"> 2 000€ - 5 000€</SelectItem>
                                        <SelectItem value=" 5000+"> 5 000€ +</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    )}
                />
                <div className='p-4 col-span-2'>
                    <Label className="mb-2" htmlFor="projectInfo">Information sur votre projet</Label>
                    <Textarea disabled={isSending} className='h-20 rounded' id="projectInfo" {...register('projectInfo')} />
                </div>
                <Typography.Text className='m-4 text-white/50 leading-0! text-sm col-span-2'>* Champ obligatoire</Typography.Text>
                
                <Button disabled={isSending} className={`relative m-4 w-fit rounded-full px-6 disabled py-5`} type="submit"  variant="outline">
                    Lancer mon projet
                    <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                </Button>
            </form>
        </Form>
       
    );
}