# Swati Gupta — Staff Software Engineer & Cloud Architect Portfolio

A modern, responsive personal portfolio website engineered with React 19, TypeScript, Tailwind CSS, and Vite. Architected with high aesthetic standards, zero-pill metadata discipline, fluid typography, interactive case-study modal simulators, and comprehensive accessibility.

---

## 1. Features & Architectural Overview

- **3-Zone Top Bar Navigation**: Adheres strictly to the single-line, 3-zone contract (Wordmark brand, clean text navigation links, single-line actions).
- **Split-Screen Editorial Hero**: Balanced headline typography, unboxed metadata kickers, quantified proof metrics with tabular figures (`font-mono tabular-nums`), and high-resolution portrait imagery with fallback protection.
- **Interactive Biography & Systems Philosophy**: Narrative story paired with interactive deep-dive tabs for Architecture Philosophy, Engineering Leadership, and Academic Credentials.
- **Media-First Projects Showcase**: Bento grid presentation with functional category filtering (Distributed Cloud, Full-Stack & UI, Data & Telemetry, Open Source), quantified impact badges, and unboxed technology tags.
- **Comprehensive Case Study Modal Lightbox**: Deep architectural breakdowns (Problem, Architecture, Measurable Outcomes, and an interactive traffic burst simulator).
- **Taxonomy of Verified Technical Skills**: Grouped into infrastructure, backend systems, modern frontend, and observability with real-time search filtering.
- **Career Chronology & Milestones**: Measurable outcomes and stack tags across high-growth startups and enterprise roles.
- **Interactive Inquiries & Contact Dispatcher**: Input-validated contact form with defensive payload hygiene, client-side persistence, and one-click clipboard copying.
- **Executive Printable Resume**: In-app modal with print-to-PDF layout and plain-text export.

---

## 2. Environment & Prerequisites

1. **Node.js**: v20+ & npm installed.
2. **Google Cloud SDK (`gcloud`)**: Authenticated with your target GCP project.
3. **Google Cloud Project**: With billing enabled.

Enable necessary Google Cloud APIs:
```bash
gcloud services enable \
  run.googleapis.com \
  secretmanager.googleapis.com \
  firestore.googleapis.com \
  artifactregistry.googleapis.com
```

---

## 3. Secret Management Setup

Ensure operational secrets (such as API keys or service tokens) are stored in Google Cloud Secret Manager and never committed to source code:

```bash
# 1. Create and populate the secret
gcloud secrets create GEMINI_API_KEY --replication-policy="automatic"
echo -n "YOUR_API_KEY" | gcloud secrets versions add GEMINI_API_KEY --data-file=-

# 2. Grant the default Cloud Run service account access to read the secret
PROJECT_NUMBER=$(gcloud projects describe $(gcloud config get-value project) --format="value(projectNumber)")

gcloud secrets add-iam-policy-binding GEMINI_API_KEY \
  --member="serviceAccount:${PROJECT_NUMBER}-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"
```

---

## 4. Database Security Configuration (Cloud Firestore)

When backing application data or inquiries with Cloud Firestore, enforce owner-bound isolation and zero insecure defaults (`firestore.rules`):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Isolated user-bound interactions and inquiry storage
    match /users/{userId}/interactions/{interactionId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Default deny for all other resources
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

Deploy security rules via Firebase CLI:
```bash
firebase deploy --only firestore:rules
```

---

## 5. Local Development & Build

```bash
# Install dependencies
npm install

# Run Vite development server
npm run dev

# Verify types and build production bundle
npm run build
```

---

## 6. Google Cloud Run Deployment Flow

Deploy the containerized application directly to Google Cloud Run:

```bash
# 1. Build and deploy to Cloud Run
gcloud run deploy swati-gupta-portfolio \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-secrets="GEMINI_API_KEY=GEMINI_API_KEY:latest" \
  --platform managed

# 2. Apply Mandatory Campaign Verification Label
gcloud run services update swati-gupta-portfolio \
  --update-labels=dev-tutorial=cloud-run-ai-challenge \
  --region us-central1
```

---

## 7. Security & Input Sanitization Architecture

- **Zero Insecure Defaults**: No open Firestore permissions or wildcard policies.
- **XSS & Injection Defense (OWASP A03)**: Dynamic user inputs are stripped of HTML/script tags before local storage or transmission.
- **Null-Safe Payloads**: Objects are cleansed of `undefined` values before serialization.
- **Zero Hardcoded Secrets**: All configuration values utilize environment variables or Secret Manager bindings.
