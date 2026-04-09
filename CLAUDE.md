# CLAUDE.md

---

## Général

- Nommage explicite plutôt qu'un commentaire — si le code a besoin d'être expliqué, c'est qu'il est mal fait. Exception : edge cases ou décisions non-évidentes
- Une fonction = une responsabilité — si elle fait deux choses, la découper
- Early return pour réduire l'imbrication — pas de `else` après un `return`
- Les "magic values" ont toujours un nom : `const MAX_RETRY_COUNT = 3` pas juste `3`
- Distinguer erreur technique et cas nominal — un `404` ou un `safeParse` qui échoue n'est pas une exception, ne pas les traiter comme telle

---

## TypeScript

- Fonctions fléchées uniquement — jamais le mot-clé `function`
- `async/await` uniquement — jamais de `.then()` chaînés
- Jamais de `catch` vide — au minimum `console.error(e)` et un `// TODO: handle error` si la gestion est à faire
- Jamais de `as`, `any`, ou `!` (non-null assertion)
- Nommage explicite : `getUserById` pas `getUser`, `isEmailValid` pas `checkEmail`
- Grouper les fonctions et valeurs liées dans un objet exporté plutôt que des exports individuels (`export const slack = { sendMessage, sendError }`)
- Types et interfaces regroupés dans un namespace dédié (`export namespace Feature { export type X ... }`)

---

## Zod

- Schéma Zod pour toute donnée externe (API, DB, env vars, params URL)
- Types toujours inférés depuis les schémas (`z.infer<typeof schema>`) — jamais de types manuels redondants
- Jamais de `as` pour contourner une validation — si ça ne parse pas, c'est un bug à corriger
- Variables d'environnement validées au démarrage via un schéma Zod dédié
- Réutiliser ou étendre les schémas existants (`schema.extend`, `schema.pick`, `schema.omit`) avant d'en créer un nouveau
- Schémas liés regroupés dans un objet exporté (`export const featureSchema = { user, session, ... }`)
- Types inférés déclarés dans le namespace correspondant (`export namespace Feature { export type User = z.infer<typeof user> }`)

---

## React / Next.js

- Logique locale dans le composant avec des states locaux — hook custom uniquement si la logique est réutilisée ailleurs
- State global via Zustand uniquement si plusieurs composants distants partagent le même état
- Styling via Tailwind + shadcn/ui — pas de CSS custom sauf cas impossible autrement
- App Router uniquement — pas de Pages Router
- Composants statiques quand il n'y a pas d'interactivité ou d'état
- Petit projet sans API externe : Server Components par défaut, `use client` uniquement pour l'interactivité, Server Actions pour les mutations
- Projet avec API externe (Hono etc.) : `'use client'` par défaut sur les composants, Next.js gère le rendu uniquement — pas de Server Actions

---

## React Query

- `useQuery` et `useMutation` directement dans le composant — pas de hook custom qui les encapsule
- Les fonctions async (appels API, etc.) définies dans un fichier dédié (`api/[feature].ts`) — jamais inline dans `queryFn`
- Clés de cache explicites et structurées : `['user', id]` pas `['getUser']`
- `staleTime` défini explicitement — jamais laisser la valeur par défaut sans y avoir pensé
- Hook custom uniquement si la combinaison de plusieurs queries devient vraiment complexe — jamais pour simplifier un seul appel

---

# Contexte projet

## Stack

- Général, TypeScript, Zod, React / Next.js, React Query

## Structure

```
src/
├── app/                    # Pages et routes (App Router)
│   ├── api/send-mail/      # Route API envoi d'email
│   ├── contact/
│   ├── projects/
│   ├── services/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── icons/              # Icônes SVG (tech/, network/)
│   ├── magicui/            # Composants d'animation (aurora, globe, marquee…)
│   ├── navbar/             # Navigation (desktop + mobile)
│   ├── ui/                 # shadcn/ui (button, card, form, input…)
│   ├── contact-form.tsx
│   ├── project-card.tsx
│   ├── services-card.tsx
│   └── ...
├── lib/
│   ├── models.ts           # Schémas Zod (validation formulaire)
│   └── utils.ts            # Utilitaires (cn)
└── utils/
    ├── data.tsx             # Données statiques (services, projets, avis)
    └── string.ts            # Constantes texte UI
```

## Conventions spécifiques

- Site vitrine sans API externe → Server Components par défaut, `'use client'` uniquement pour l'interactivité
- Données statiques dans `src/utils/data.tsx` — pas de fetching
- React Query non utilisé (pas d'API externe)
- Formulaire de contact : react-hook-form + Zod côté client, validation Zod côté serveur dans la route API
- Animations via magicui (composants dans `src/components/magicui/`)
- Analytics via Aptabase (`InitPageSession`, `LinkTrack`)
- Dark mode via next-themes (class strategy)
- Rate limiting email via Upstash + Vercel KV

## Hors périmètre

- Pages Router
- React Query (pas d'API externe)
- Zustand (pas d'état global partagé)
- CSS custom (Tailwind + shadcn uniquement)

---

# Session de travail

Si un fichier existe dans `.claude/tasks/`, le lire avant de commencer.
Respecter le périmètre défini dans la tâche — ne pas modifier ce qui n'est pas demandé.
