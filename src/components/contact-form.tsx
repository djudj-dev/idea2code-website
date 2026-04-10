'use client';

import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Typography } from './ui/typography';
import { Button } from './ui/button';
import { Form, FormField } from './ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/lib/models';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Check, Loader2, Send, ArrowRight } from 'lucide-react';
import { useAptabase } from '@aptabase/react';
import { cn } from '@/lib/utils';
import { string } from '@/utils/string';

const labelClasses =
  'mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground';
const inputClasses = 'h-12 rounded-lg bg-muted px-4';

export const ContactForm = ({ className }: { className?: string }) => {
  const searchParams = useSearchParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType:
        z.string().safeParse(searchParams.get('projectType')).data || undefined,
    },
  });

  const { trackEvent } = useAptabase();
  const { register, handleSubmit } = form;
  const router = useRouter();
  const [isSending, setSending] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    trackEvent('submiting-contact-form');
    setSending(true);

    try {
      await fetch('/api/send-mail', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });

      setSuccess(true);
      toast(
        <div className="flex items-center gap-2">
          <Send className="size-4" />
          <Typography.Large>
            {string.contactForm.toasts.success}
          </Typography.Large>
        </div>,
        {
          className: 'text-foreground! bg-card! border-border!',
          duration: 2000,
        },
      );

      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (error) {
      console.error(error);
      toast(string.contactForm.toasts.error, {
        className: 'text-foreground! bg-card! border-border!',
        duration: 3000,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('flex flex-col gap-5', className)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Label className={labelClasses} htmlFor="firstname">
              {string.contactForm.labels.firstName}
            </Label>
            <Input
              disabled={isSending}
              className={inputClasses}
              id="firstname"
              type="text"
              {...register('firstName', { required: false, maxLength: 80 })}
            />
          </div>
          <div>
            <Label className={labelClasses} htmlFor="last">
              {string.contactForm.labels.lastName}
            </Label>
            <Input
              disabled={isSending}
              className={inputClasses}
              id="lastname"
              type="text"
              {...register('lastName', { required: false, maxLength: 100 })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Label className={labelClasses} htmlFor="email">
              {string.contactForm.labels.email}
            </Label>
            <Input
              disabled={isSending}
              className={inputClasses}
              id="email"
              type="text"
              {...register('email', { required: false, pattern: /^\S+@\S+$/i })}
            />
          </div>
          <div>
            <Label className={labelClasses} htmlFor="phone">
              {string.contactForm.labels.phone}
            </Label>
            <Input
              disabled={isSending}
              className={inputClasses}
              id="phone"
              type="tel"
              {...register('phone', { minLength: 6, maxLength: 12 })}
            />
          </div>
        </div>
        <div>
          <Label className={labelClasses} htmlFor="society">
            {string.contactForm.labels.company}
          </Label>
          <Input
            disabled={isSending}
            className={inputClasses}
            id="society"
            type="text"
            {...register('society')}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            name="projectType"
            rules={{ required: true }}
            render={({ field }) => (
              <div>
                <Label className={labelClasses} htmlFor="projectType">
                  {string.contactForm.labels.projectType}
                </Label>
                <Select
                  disabled={isSending}
                  onValueChange={field.onChange}
                  {...register('budget', { required: true })}
                  defaultValue={field.value}
                >
                  <SelectTrigger className={cn('w-full', inputClasses)}>
                    <SelectValue
                      placeholder={string.contactForm.placeholders.projectType}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {string.contactForm.options.projectType.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          />
          <FormField
            name="budget"
            rules={{ required: true }}
            render={({ field }) => (
              <div>
                <Label className={labelClasses} htmlFor="budjet">
                  {string.contactForm.labels.budget}
                </Label>
                <Select
                  disabled={isSending}
                  onValueChange={field.onChange}
                  {...register('budget', { required: true })}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    id="budjet"
                    className={cn('w-full', inputClasses)}
                  >
                    <SelectValue
                      placeholder={string.contactForm.placeholders.budget}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {string.contactForm.options.budget.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          />
        </div>
        <div>
          <Label className={labelClasses} htmlFor="projectInfo">
            {string.contactForm.labels.message}
          </Label>
          <Textarea
            disabled={isSending}
            className="min-h-32 resize-none rounded-lg bg-muted px-4 py-3 md:min-h-28"
            id="projectInfo"
            rows={5}
            {...register('projectInfo')}
          />
        </div>
        <Typography.Small>{string.contactForm.requiredHint}</Typography.Small>

        <Button
          type="submit"
          size="lg"
          disabled={isSending || isSuccess}
          className="mt-2 w-full gap-2"
        >
          {isSuccess ? (
            <>
              <Check className="size-4" />
              {string.contactForm.submit.success}
            </>
          ) : isSending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              {string.contactForm.submit.loading}
            </>
          ) : (
            <>
              <span>{string.contactForm.submit.idle}</span>
              <ArrowRight data-icon="inline-end" className="size-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};
