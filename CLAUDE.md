# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js application for Hiveconomy, a dividend investing platform. The project is a landing page showcasing dividend tracking tools and services with a lead magnet popup for email collection.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code linting

## Technology Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **Linting**: ESLint with Next.js and TypeScript configs
- **React**: React 19 with React DOM

## Project Structure

This uses Next.js App Router architecture:

- `src/app/layout.tsx` - Root layout component with metadata and global styles
- `src/app/page.tsx` - Main landing page with hero section, about, products, and lead magnet popup
- `src/app/globals.css` - Global styles with Tailwind CSS imports
- `public/logo.png` - Main logo asset used in header

## Key Features

- **Landing Page**: Full marketing page with hero, about, products sections
- **Lead Magnet**: Timed popup (10 seconds) for email collection with dividend guide offer
- **Responsive Design**: Built with Tailwind CSS responsive utilities
- **TypeScript**: Strict TypeScript configuration with path aliases (`@/*` maps to `./src/*`)

## Configuration Notes

- Uses TypeScript path aliases: `@/*` resolves to `./src/*`
- ESLint extends Next.js core web vitals and TypeScript rules
- Next.js configuration is minimal with default settings
- Tailwind CSS v4 with PostCSS integration