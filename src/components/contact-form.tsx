'use client'

import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ShineBorder } from './magicui/shine-border';
import { Typography } from './typography';

export const ContactForm = ({ className }: { className?: string }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: unknown) => {
        console.log('Submit')
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`md:grid block grid-rows md:grid-rows-none md:grid-cols-2 m-auto ${className}`}>
            <div className='p-4'>
                <Label className="mb-2" htmlFor="firstname">Prénom*</Label>
                <Input className="rounded" id='firstname' type="text" {...register("firstName", { required: true, maxLength: 80 })} />
            </div>
            <div className='p-4'>
                <Label className="mb-2" htmlFor="last">Nom*</Label>
                <Input className="rounded" id='lastname' type="text" {...register("lastName", { required: true, maxLength: 100 })} />
            </div>
            <div className='p-4'>
                <Label className="mb-2" htmlFor="email">Email*</Label>
                <Input className="rounded" id='email' type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>
            <div className='p-4'>
                <Label className="mb-2" htmlFor="phone">Numéro de Télephone</Label>
                <Input className="rounded" id='phone' type="tel" {...register("phone", { minLength: 6, maxLength: 12 })} />
            </div>
            <div className='p-4'>
                <Label className="mb-2" htmlFor="society">Société</Label>
                <Input className="rounded" id='society' type="text"  {...register("society")} />
            </div>
            <div></div>
            <div className='p-4'>
                <Label className="mb-2" htmlFor="projectType">Type de Projet*</Label>
                <Select {...register("projectType", { required: true })}>
                    <SelectTrigger id="projectType" className="w-full rounded">
                        <SelectValue placeholder="Quel type de projet ?" />
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
            </div >
            <div className='p-4'>
                <Label className="mb-2" htmlFor="budjet">Votre budget*</Label>
                <Select {...register("budjet", { required: true })}>
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
            <div className='p-4 col-span-2'>
                <Label className="mb-2" htmlFor="projectInfo">Information sur votre projet</Label>
                <Textarea className='h-20 rounded' id="projectInfo" {...register('projectInfo')} />
            </div>
            <Typography.Text className='m-4 text-white/50 leading-0! text-sm col-span-2'>* Champ obligatoire</Typography.Text>
            <Button className="relative m-4 w-fit rounded-full px-6 py-5" type="submit" variant="outline">
                Lancer mon projet
                <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
            </Button>
        </form >
    );
}