/* =====================================================================
   Paytm Intelligence onboarding portal: ALL on-screen text lives in this file.

   HOW TO EDIT
   - Change any wording below and refresh the page. No other file needs to change.
   - {name} in a message is a placeholder that the page fills in. Keep it as it is.

   HOW TO ADD A LANGUAGE
   1. Add it to "languages" below, for example:  hi: { name: "हिन्दी" }
      (add dir: "rtl" for right-to-left languages such as Arabic).
   2. Copy the whole "en" block, rename the copy to the language code (hi: { ... }) and translate the values on the right.
      Any message you leave out falls back to English, so you can translate in stages.
   3. A language switcher appears in the header automatically once there is more than one language.
      A link can also force a language: https://your-site/?lang=hi

   WHAT MUST NOT BE TRANSLATED
   - The keys on the left of each line.
   - The Google Form question titles and answer choices that are sent to Google (they live in app.js and config.js).
     Only what the customer SEES is translated here; the values sent to your Google Forms stay in English,
     so your response sheets and the "Yes"/"No" style answers keep working.
   ===================================================================== */
window.PI_MESSAGES = {
  defaultLang: "en",
  languages: {
    en: { name: "English" }
  },

  en: {
    /* ---------- Page, meta and header ---------- */
    "meta.title": "Client Onboarding | Paytm Intelligence",
    "meta.description": "Onboard to Paytm Intelligence on WhatsApp, SMS or RCS. Complete the form for your channel and our team will get back to you.",
    "meta.ogDescription": "Complete the onboarding questionnaire for WhatsApp, SMS or RCS.",
    "skip": "Skip to the form",
    "logo.alt": "Pi by Paytm",
    "logo.by": "by",
    "nav.label": "Channels",
    "lang.label": "Language",
    "footer.copy": "© {year} Paytm Intelligence",
    "footer.help": "Need help? Contact your Paytm Intelligence account manager.",

    /* ---------- Channel names (menu, tabs, progress, animation) ---------- */
    "tab.whatsapp": "WhatsApp",
    "tab.sms": "SMS",
    "tab.rcs": "RCS",
    "node.voice": "Voice call",

    /* ---------- Welcome banner ---------- */
    "intro.live": "Onboarding open",
    "intro.title": "Welcome to Paytm Intelligence Multilingual",
    "intro.text": "To get started, please fill in your business information below. Once complete, you can onboard on WhatsApp, SMS and RCS.",

    /* ---------- Step 2 heading and locked panel ---------- */
    "step2.title": "Choose your channels",
    "step2.text": "Complete one or more. Your business information is added automatically.",
    "tabs.label": "Onboarding channel",
    "lock.title": "Channels are locked",
    "lock.text": "Complete the business information above and click Continue to unlock WhatsApp, SMS and RCS.",
    "lock.tip": "Fill in the business information and click Continue",
    "loading": "Loading the onboarding form",

    /* ---------- Side panel ---------- */
    "aside.label": "Progress and next steps",
    "prog.title": "Your progress",
    "prog.meter": "Form completion",
    "prog.bi": "Business information",
    "prog.complete": "Complete",
    "prog.inprogress": "In progress",
    "prog.submitted": "Submitted",
    "prog.notstarted": "Not started",
    "prog.locked": "Locked",
    "prog.of": "{done} of {total}",
    "count.one": "{tab}: {done} of {total} field completed",
    "count.other": "{tab}: {done} of {total} fields completed",
    "next.title": "What happens next",
    "next.1.title": "Add business information",
    "next.1.text": "Entered once and used for every channel.",
    "next.2.title": "Complete your channels",
    "next.2.text": "Submit one, two or all of WhatsApp, SMS and RCS.",
    "next.3.title": "We get back to you",
    "next.3.text": "You will hear from us by email.",

    /* ---------- Step 1: business information ---------- */
    "bi.title": "Business information",
    "bi.note": "All fields are required. These details are used for every channel you onboard.",
    "bi.group.0": "SPOC details",
    "bi.group.1": "Business details",
    "bi.status.ok": "Business information confirmed. Choose your channels below.",
    "bi.status.fix": "Please correct the highlighted details to keep the channels unlocked.",
    "bi.status.filled": "All fields are filled. Click Continue to unlock the channels.",
    "bi.status.empty": "Fill in all fields to continue.",
    "bi.summary.spoc": "{name} (SPOC)",

    "f.bi.pc": "Name",
    "f.bi.pc.hint": "SPOC Name",
    "f.bi.email": "Email",
    "f.bi.email.hint": "SPOC Email",
    "f.bi.mob": "Contact Number",
    "f.bi.mob.hint": "SPOC Contact Number",
    "f.bi.des": "Designation",
    "f.bi.des.hint": "SPOC Designation",
    "f.bi.co": "Company Name",
    "f.bi.co.hint": "Business name",
    "f.bi.reg": "Registered Business Name",
    "f.bi.reg.hint": "As per legal documents",
    "f.bi.web": "Website",
    "f.bi.web.hint": "Home page of the business website we are onboarding",
    "f.bi.am": "Account Manager Name",
    "f.bi.am.hint": "Paytm Sales SPOC Name",

    /* ---------- Buttons ---------- */
    "btn.submit": "Submit",
    "btn.submitting": "Submitting",
    "btn.clearForm": "Clear form",
    "btn.clear": "Clear",
    "btn.continue": "Continue",
    "btn.collapse": "Collapse",
    "btn.expand": "Expand",

    /* ---------- Shared form text ---------- */
    "form.required": "All fields are required.",
    "form.biNote": "Your business information from Step 1 is included automatically.",
    "lbl.optional": "(optional)",
    "sel.choose": "Choose",
    "ph.other": "Only needed if you select Other",
    "ph.link": "https://",
    "need.ready": "Your response goes to the Paytm Intelligence onboarding team.",
    "need.one": "{n} required field left. Submit unlocks when everything is completed.",
    "need.other": "{n} required fields left. Submit unlocks when everything is completed.",

    /* ---------- Answer choices (shown to the customer; the English value is what is sent to Google) ---------- */
    "opt.Yes": "Yes",
    "opt.No": "No",
    "opt.WhatsApp Business App": "WhatsApp Business App",
    "opt.WhatsApp Business API": "WhatsApp Business API",
    "opt.Personal WhatsApp": "Personal WhatsApp",
    "opt.Karix": "Karix",
    "opt.Gupshup": "Gupshup",
    "opt.WATI": "WATI",
    "opt.Interakt": "Interakt",
    "opt.Infobip": "Infobip",
    "opt.Netcore": "Netcore",
    "opt.Other": "Other",
    "opt.Airtel": "Airtel",
    "opt.Jio": "Jio",
    "opt.Vodafone Idea (Vi)": "Vodafone Idea (Vi)",
    "opt.BSNL": "BSNL",
    "opt.Smart Ping": "Smart Ping",
    "opt.Tata Tele": "Tata Tele",
    "opt.Transactional": "Transactional",
    "opt.Promotional": "Promotional",

    /* ---------- WhatsApp form ---------- */
    "form.whatsapp.title": "WhatsApp Business API (WABA) Onboarding Questionnaire",
    "s.whatsapp.0": "WhatsApp Business Account",
    "s.whatsapp.1": "Meta Business Account",
    "s.whatsapp.2": "WhatsApp Business Details",
    "f.whatsapp.waba": "Does the client already have a WhatsApp Business Account (WABA)?",
    "f.whatsapp.bmid": "Business Manager (BM) ID",
    "f.whatsapp.fbu": "Facebook Page URL",
    "f.whatsapp.adm.heading": "Admin access is mandatory",
    "f.whatsapp.adm.note": "The SPOC must have full admin access to the Meta Business Manager at the time of onboarding. Without it, we cannot complete the setup.",
    "f.whatsapp.adm.ack": "I confirm the SPOC will have full admin access",
    "f.whatsapp.use": "Is the client currently using",
    "f.whatsapp.wan": "WhatsApp Business Number",
    "f.whatsapp.host": "Is the WhatsApp number currently hosted with another BSP?",
    "f.whatsapp.bsp": "If Yes, who is the current BSP?",
    "f.whatsapp.bspo": "If \"Other\" BSP, please specify",
    "f.whatsapp.mig": "Does the client want to migrate the existing WhatsApp number to Paytm?",

    /* ---------- SMS form ---------- */
    "form.sms.title": "SMS Onboarding Questionnaire",
    "s.sms.0": "DLT Registration",
    "s.sms.0.note.title": "DLT registration is mandatory",
    "s.sms.0.note.text": "The business must be registered on the DLT platform before SMS can be sent. Please share the Principal Entity (PE) ID and the operator you registered with.",
    "s.sms.1": "Messaging Requirements",
    "s.sms.2": "Sender ID (Header)",
    "s.sms.2.note.title": "Sender IDs are case sensitive",
    "s.sms.2.note.text": "Enter each Sender ID exactly as it is approved on the DLT platform, with the same capital and small letters. For example, PAYTMI and PaytmI are different Sender IDs. Separate more than one with commas.",
    "f.sms.pe": "Principal Entity (PE) ID",
    "f.sms.op": "Which DLT operator is the business registered with?",
    "f.sms.st": "What type of SMS will be sent?",
    "f.sms.sidt": "Approved Transactional Sender ID(s)",
    "f.sms.sidt.hint": "Sender ID(s) approved for transactional messages",
    "f.sms.sidp": "Approved Promotional Sender ID(s)",
    "f.sms.sidp.hint": "Sender ID(s) approved for promotional messages",

    /* ---------- RCS form ---------- */
    "form.rcs.title": "RCS Business Messaging Onboarding Questionnaire",
    "s.rcs.0": "Brand Information",
    "s.rcs.1": "Contact Information",
    "s.rcs.2": "Customer Consent (Opt-in)",
    "s.rcs.3": "Privacy & Compliance",
    "f.rcs.bn": "Brand Name to be displayed on RCS",
    "f.rcs.ln": "Legal Name of the Brand",
    "f.rcs.uc": "Intended use case for RCS messaging",
    "f.rcs.an": "Agent Name (Display Name)",
    "f.rcs.ad": "Agent Description",
    "f.rcs.ad.hint": "Maximum 100 characters. You can paste your text here.",
    "f.rcs.lg": "Agent Logo",
    "f.rcs.hr": "Hero Image / Banner",
    "f.rcs.bc": "Brand Colors (Hex Code)",
    "f.rcs.bc.hint": "Optional. For example #00B9F5",
    "f.rcs.cp": "Customer Support Phone Number",
    "f.rcs.ce": "Customer Support Email",
    "f.rcs.cw": "Business Website URL",
    "f.rcs.cons": "How do you obtain customer consent before sending RCS messages?",
    "f.rcs.cons.hint": "Share a publicly accessible link (an image, a screen recording, or a page) that shows how customer consent is obtained.",
    "f.rcs.pp": "Privacy Policy URL",
    "f.rcs.tc": "Terms & Conditions URL",

    /* ---------- Image link / upload (RCS logo and banner) ---------- */
    "img.hint.base": "JPG or JPEG only",
    "img.hint.size": ". {w} × {h} px",
    "img.hint.kb": ", under {kb} KB",
    "img.source": "Image source",
    "img.paste": "Paste link",
    "img.upload": "Upload image",
    "img.pick": "Choose a JPG or JPEG image",
    "img.previewAlt": "Selected image preview",
    "img.remove": "Remove",
    "img.uploading": "Uploading, please wait...",
    "img.uploaded": "Uploaded",
    "img.uploadedName": "Uploaded image",

    /* ---------- Validation and error messages ---------- */
    "err.required": "This field is required.",
    "err.ack": "Please confirm to continue.",
    "err.imgUpload": "Please upload a JPG or JPEG image.",
    "err.imgPaste": "Paste an image link or upload a JPG or JPEG image.",
    "err.check": "Select at least one option.",
    "err.radio": "Please select an option.",
    "err.select": "Please choose an option.",
    "err.email": "Enter a valid email address.",
    "err.tel": "Enter a valid mobile number (10 to 15 digits).",
    "err.url": "Enter a valid link, for example https://example.com",
    "err.imgurl": "Enter a valid link, for example https://example.com/logo.jpg",
    "err.hex": "Enter a 6-digit hex code, for example #00B9F5.",
    "err.number": "Enter a whole number greater than 0.",
    "err.date": "Choose today's date or a later date.",
    "err.phones.range": "Enter 5 to 10 numbers, separated by commas or new lines.",
    "err.phones.bad": "One or more numbers are not valid.",
    "err.text.min": "Enter at least 2 characters.",
    "err.textarea.min": "Please provide a little more detail.",
    "err.max": "Please keep this to {max} characters or fewer.",
    "err.uploadWait": "Please wait for the upload to finish.",
    "err.img.type": "Only JPG or JPEG images are allowed.",
    "err.img.net": "The upload did not complete. Please try again, or paste a link instead.",
    "err.img.off": "Image upload is not available right now. Please paste a link instead.",
    "err.img.size": "The image must be under {kb} KB (yours is {have} KB).",
    "err.img.dim": "The image must be {w} × {h} pixels (yours is {have}).",
    "err.ref": " (Ref: {code})",
    "err.submit": "We could not submit your form right now. Please try again in a few minutes.",

    /* ---------- Dialogs ---------- */
    "welcome.title": "Welcome to Paytm Intelligence",
    "welcome.text": "We appreciate your interest in working with us. To begin onboarding, please complete the questionnaire for your preferred messaging channel.",
    "welcome.1.title": "Enter your business information",
    "welcome.1.text": "Entered once and shared across all channels",
    "welcome.2.title": "Complete your channels",
    "welcome.2.text": "WhatsApp, SMS and RCS: submit all of them, or only the ones you need",
    "welcome.3.title": "We get back to you",
    "welcome.3.text": "Our onboarding team will review your submission and contact you shortly",
    "welcome.go": "Begin onboarding",

    "needbi.title": "Add business information first",
    "needbi.text": "Please fill in your business information and click Continue. WhatsApp, SMS and RCS unlock after that.",
    "needbi.go": "Add business information",

    "clear.title": "Clear this form?",
    "clear.form": "All the information you have entered in this form will be removed. This cannot be undone.",
    "clear.bi": "Your business information will be removed and the channels will be locked again. Your channel answers are kept.",
    "clear.cancel": "Cancel",

    "busy.title": "Submitting your response",
    "busy.text": "Please keep this page open.",
    "busy.slow": "This is taking longer than usual because of a slow connection. Please do not close or refresh this page.",

    "done.title": "Thank you for your submission",
    "done.text": "We have received your onboarding request. Our team will review your details and get back to you shortly.",
    "done.also": "You can also onboard on {list} using the same business information.",
    "done.ok": "OK",
    "list.sep": " and "
  }
};
