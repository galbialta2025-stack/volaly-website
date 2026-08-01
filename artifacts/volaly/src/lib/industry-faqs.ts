import type { IndustryPageData } from "./industries-data";

export type Faq = { q: string; a: string };

export const industryFaqs: Record<string, Faq[]> = {
  hotel: [
    {
      q: "Why isn't my hotel appearing when travellers search on Google or Google Maps?",
      a: "Incomplete or unclaimed Google Business Profile, inconsistent NAP data, wrong categories or low review velocity usually hide hotels. Claim and verify the profile, standardise contact details everywhere, select accurate lodging categories and generate consistent recent reviews to restore Local Pack visibility.",
    },
    {
      q: "How can hotels reduce dependence on Booking.com and Agoda while staying visible?",
      a: "Optimise a fast mobile website with a real-time booking engine, list live rates on Google Hotel Ads, fully complete the Google Business Profile and keep direct rates competitive. Strong owned channels shift more volume to higher-margin direct bookings while OTAs remain useful for discovery.",
    },
    {
      q: "Do Google reviews actually influence direct bookings and ranking?",
      a: "Yes. Quantity, recency, average rating and owner responses are major prominence factors. Hotels with steady recent reviews outrank quieter competitors and convert more profile views into direct bookings. Request reviews post-stay and reply to every one.",
    },
    {
      q: "How can hotels convert more Google traffic into direct reservations instead of OTA clicks?",
      a: "Add a clear direct booking link to the Google Business Profile, keep rates competitive, ensure the website books in under three clicks and use Google Hotel Ads for rate visibility. Removing friction turns Local Pack and search traffic into commission-free reservations.",
    },
    {
      q: "Why do so many hotel website visitors abandon the booking process?",
      a: "Slow load times, multi-step checkout, missing live availability and weak calls-to-action cause drop-off. A fast booking path linked from the Business Profile plus AI-assisted availability checks significantly increases conversion of high-intent traffic.",
    },
    {
      q: "Why doesn't my hotel get recommended in ChatGPT or other AI travel answers?",
      a: "AI systems prioritise clear entity data, consistent descriptions, recent reviews and structured amenities. Incomplete profiles or details locked in images create discovery gaps. Strengthen profile completeness and readable text so AI tools can confidently recommend the property.",
    },
    {
      q: "Can AI agents answer guest questions and complete direct bookings automatically?",
      a: "Yes. AI agents handle availability, rates, amenities and policies across web chat, WhatsApp and email 24/7, then guide guests to book directly. They capture after-hours demand, reduce front-desk load and escalate complex cases with full context.",
    },
    {
      q: "How can hotels capture guest data after a stay and use it for rebooking?",
      a: "Connecting the booking engine, reviews and messaging into a simple CRM enables automated post-stay messages, review requests and targeted rebooking offers. This turns one-time guests into repeat visitors and improves lifetime value.",
    },
    {
      q: "How do hotels increase repeat stays without relying on deep discounts?",
      a: "Timely review requests, personalised post-stay messages and exclusive member offers outperform pure price cuts. Automated sequences keep the hotel top-of-mind and increase revisit frequency at higher margins.",
    },
    {
      q: "What return can independent hotels realistically expect from AI visibility and automation tools?",
      a: "Entry-level tools typically start at $99–$300 per month. Return comes from higher direct-booking conversion, recovered after-hours enquiries and lower OTA commissions. Most properties see payback within 60–90 days when booking friction is removed.",
    },
  ],

  restaurant: [
    {
      q: "Why isn't my restaurant showing up on Google Maps when people search nearby?",
      a: "Incomplete or unverified Google Business Profile, wrong primary category, inconsistent NAP data or low recent review volume usually prevent appearance in the Local Pack. Claim and verify the profile, select the most specific category and complete every field.",
    },
    {
      q: "How can restaurants get more table reservations directly from Google and Maps?",
      a: "Add a direct reservation link to the Google Business Profile, keep hours and menu accurate in text, post current specials and ensure the website converts mobile traffic quickly. Strong Local Pack placement plus zero-friction booking turns searches into confirmed tables.",
    },
    {
      q: "Do Google reviews really decide whether people choose my restaurant?",
      a: "Yes. Volume, recency, rating and owner responses heavily influence both ranking and guest decisions. Restaurants with steady recent reviews consistently outperform quieter competitors. Request reviews after positive visits and reply to every one.",
    },
    {
      q: "Why do so many potential diners look at my profile or website and never book?",
      a: "Friction such as multi-step forms, missing real-time availability or weak calls-to-action causes drop-off. A fast booking path linked from the Business Profile, ideally with AI availability checks, converts more Local Pack traffic into reservations.",
    },
    {
      q: "How can restaurants handle more walk-ins and last-minute reservations without extra staff?",
      a: "Real-time availability tools and AI agents that answer wait times and take last-minute bookings across messaging channels free staff while capturing demand that would otherwise be lost.",
    },
    {
      q: "Why doesn't my restaurant appear in ChatGPT, Gemini or Perplexity food recommendations?",
      a: "AI systems prioritise clear entity data, consistent descriptions, recent reviews and structured menu information. Incomplete profiles or details locked in images create discovery gaps. Strengthen readable text signals so AI tools can recommend the restaurant.",
    },
    {
      q: "Can AI chatbots take reservations and answer menu questions 24/7?",
      a: "Yes. AI agents handle menu, allergen, hours, wait-time and availability questions across web chat, WhatsApp and Instagram, then guide guests to book. They capture after-hours demand and free staff for service.",
    },
    {
      q: "How can restaurants capture guest data after a visit and turn one-time diners into regulars?",
      a: "Connecting bookings, reviews and messaging into a simple CRM enables automated thank-you messages, review requests and targeted offers. This improves lifetime value and repeat frequency.",
    },
    {
      q: "How do restaurants increase repeat visits without constant discounting?",
      a: "Consistent experience, timely review requests, personalised follow-up and exclusive regular-guest offers outperform pure discounts. Automated sequences keep the restaurant top-of-mind at higher margins.",
    },
    {
      q: "What does AI automation and visibility typically cost a restaurant and what payback is realistic?",
      a: "Entry-level tools usually start at $99–$300 per month. Return comes from higher reservation conversion, recovered after-hours bookings and improved repeat visits. Most operators see payback within 60–90 days.",
    },
  ],

  bar: [
    {
      q: "Why isn't my bar appearing in local 'bars near me' or 'happy hour' searches?",
      a: "Unverified or incomplete Google Business Profile, generic categories, outdated hours or low review activity usually suppress visibility. Claim the listing, choose specific categories (Cocktail Bar, Sports Bar, Wine Bar) and complete every field.",
    },
    {
      q: "How can bars get more event and VIP table reservations from Google?",
      a: "Add a reservation or enquiry link, keep special hours and events accurate, post current nights and ensure clear booking paths. Strong Local Pack placement turns searches into confirmed tables and VIP bookings.",
    },
    {
      q: "Do Google reviews affect whether people choose my bar over the one next door?",
      a: "Yes. Volume, recency and responses are major trust and ranking factors. Bars with consistent recent reviews outperform quieter competitors. Request reviews after visits and reply to every one.",
    },
    {
      q: "Why do many people check my bar online but never reserve or show up?",
      a: "Missing real-time availability, unclear next steps or weak calls-to-action cause drop-off. A fast reservation path plus AI-assisted availability significantly increases conversion.",
    },
    {
      q: "How can bars capture late-night and after-hours enquiries that currently go unanswered?",
      a: "AI agents that handle hours, events, wait times and reservations across messaging channels capture demand outside staffed hours and reduce missed opportunities.",
    },
    {
      q: "Why doesn't my bar get mentioned in AI recommendations for nights out?",
      a: "AI systems prioritise clear entity data, recent reviews and structured information. Incomplete profiles create discovery gaps. Strengthen completeness and readable text signals.",
    },
    {
      q: "Can AI agents handle event enquiries, wait times and table reservations automatically?",
      a: "Yes. AI agents answer across web chat, WhatsApp and Instagram 24/7, then guide guests to reserve. They free staff and escalate complex requests with context.",
    },
    {
      q: "How can bars collect guest data from reservations and events for future marketing?",
      a: "Connecting reservations and messaging into a simple CRM enables automated follow-up, review requests and targeted event offers, turning one-time visitors into regulars.",
    },
    {
      q: "How do bars turn one-time visitors into regulars without heavy drink specials?",
      a: "Consistent experience, timely review requests and exclusive regular-guest offers outperform pure discounts. Automated sequences increase revisit frequency at higher margins.",
    },
    {
      q: "What return can independent bars expect from AI visibility and automation?",
      a: "Entry-level tools typically start at $99–$250 per month. Return comes from higher reservation conversion and recovered after-hours demand. Most operators see payback within 60–90 days.",
    },
  ],

  gym: [
    {
      q: "Why isn't my gym showing up when people search 'gym near me'?",
      a: "Unverified profile, wrong categories, incomplete services or low review velocity usually prevent visibility. Claim and verify the Google Business Profile and complete every field.",
    },
    {
      q: "How can gyms generate more trial membership leads from Google and Maps?",
      a: "Add a clear 'Book a trial' link, list class schedules accurately and ensure the website converts mobile traffic quickly. Strong Local Pack placement turns high-intent searches into trial bookings.",
    },
    {
      q: "Do Google reviews influence whether someone books a trial at my gym?",
      a: "Yes. Volume, recency and responses are major trust and ranking factors. Gyms with steady recent reviews convert more profile views into trials. Request reviews after sessions and reply to every one.",
    },
    {
      q: "Why do so many people start a trial but never convert to full membership?",
      a: "Slow or inconsistent follow-up after the trial is the main reason. Automated sequences that nurture prospects until decision significantly improve conversion rates.",
    },
    {
      q: "How can gyms reduce no-shows for trials and class bookings?",
      a: "Automated reminders, easy rescheduling links and clear confirmation messages reduce no-shows and protect staff time and class capacity.",
    },
    {
      q: "Why doesn't my gym appear in ChatGPT or AI fitness recommendations?",
      a: "AI systems prioritise clear entity data, recent reviews and structured class information. Incomplete profiles create discovery gaps. Strengthen readable text signals.",
    },
    {
      q: "Can AI chatbots answer class schedules, membership questions and book trials automatically?",
      a: "Yes. AI agents handle these across web chat, WhatsApp and Instagram 24/7, then guide prospects to book. They capture after-hours interest and free front-desk staff.",
    },
    {
      q: "How can gyms capture trial data and follow up effectively until conversion?",
      a: "Connecting trials and messaging into a simple CRM enables automated nurturing sequences that move more trials to full membership.",
    },
    {
      q: "How do gyms improve member retention and reduce monthly churn?",
      a: "Timely engagement, personalised offers and automated check-ins after lapses keep members active longer and improve lifetime value.",
    },
    {
      q: "What does AI automation and visibility typically cost a gym and what ROI is realistic?",
      a: "Entry-level tools usually start at $99–$300 per month. Return comes from higher trial conversion and lower churn. Most operators see payback within 60–90 days.",
    },
  ],

  dentist: [
    {
      q: "Why isn't my dental practice appearing in 'dentist near me' searches?",
      a: "Unclaimed or incomplete Google Business Profile, incorrect categories or low review velocity usually hide practices. Claim and verify the listing and complete every field.",
    },
    {
      q: "How can dental practices get more new-patient appointments from Google?",
      a: "Add a direct appointment link, list services clearly and ensure the website books quickly on mobile. Strong Local Pack placement converts high-intent searches into appointments.",
    },
    {
      q: "Do Google reviews decide whether a patient chooses my practice?",
      a: "Yes. Volume, recency and responses are major trust and ranking factors. Practices with consistent recent reviews win more new patients. Request reviews after visits and reply to every one.",
    },
    {
      q: "Why do many potential patients look at my profile and never book an appointment?",
      a: "Friction such as multi-step forms or missing real-time availability causes drop-off. A fast booking path linked from the Business Profile significantly increases conversion.",
    },
    {
      q: "How can dental practices reduce no-shows and last-minute cancellations?",
      a: "Automated reminders, easy rescheduling and clear confirmation messages reduce no-shows and protect chair time.",
    },
    {
      q: "Why doesn't my practice get recommended in ChatGPT or AI health answers?",
      a: "AI systems prioritise clear entity data, recent reviews and structured service information. Incomplete profiles create discovery gaps. Strengthen readable text signals.",
    },
    {
      q: "Can AI agents answer common patient questions and book appointments 24/7?",
      a: "Yes. AI agents handle services, hours and availability across channels, then guide patients to book. They capture after-hours demand and escalate clinical questions.",
    },
    {
      q: "How can dental practices capture patient data and run effective recall campaigns?",
      a: "Connecting bookings and messaging into a simple CRM enables automated recall sequences that bring patients back for check-ups and treatments.",
    },
    {
      q: "How do dental practices turn new patients into long-term, high-value patients?",
      a: "Consistent care, timely recalls and personalised follow-up increase lifetime value far more than one-off discounts.",
    },
    {
      q: "What return can independent dental practices expect from AI visibility and automation?",
      a: "Entry-level tools typically start at $99–$350 per month. Return comes from higher appointment conversion and improved retention. Most practices see payback within 60–90 days.",
    },
  ],

  "medical-beauty": [
    {
      q: "Why isn't my medical clinic showing up in local patient searches?",
      a: "Unverified or incomplete Google Business Profile, wrong categories or low review velocity usually prevent visibility. Claim and verify the listing and complete every field.",
    },
    {
      q: "How can medical clinics get more appointment bookings from Google Maps?",
      a: "Add a direct booking link, list services clearly and ensure the website supports quick mobile scheduling. Strong Local Pack placement converts high-intent searches into appointments.",
    },
    {
      q: "Do Google reviews influence whether patients choose my clinic?",
      a: "Yes. Volume, recency and responses are major trust and ranking factors. Clinics with steady recent reviews attract more new patients. Request reviews and reply to every one.",
    },
    {
      q: "Why do so many potential patients visit my profile or website and leave without booking?",
      a: "Friction such as multi-step forms or missing real-time availability causes drop-off. A fast booking path significantly increases conversion.",
    },
    {
      q: "How can clinics reduce appointment no-shows and cancellations?",
      a: "Automated reminders, easy rescheduling and clear confirmations reduce no-shows and protect clinical capacity.",
    },
    {
      q: "Why doesn't my clinic appear in ChatGPT or AI medical recommendations?",
      a: "AI systems prioritise clear entity data, recent reviews and structured service information. Incomplete profiles create discovery gaps. Strengthen readable text signals.",
    },
    {
      q: "Can AI agents handle patient enquiries and book appointments automatically?",
      a: "Yes. AI agents answer hours, services and availability 24/7, then guide patients to book while escalating clinical questions with context.",
    },
    {
      q: "How can medical clinics capture patient data for effective recall and follow-up?",
      a: "Connecting bookings and messaging into a simple CRM enables automated recall sequences that improve retention and lifetime value.",
    },
    {
      q: "How do clinics improve patient retention and lifetime value?",
      a: "Consistent care, timely recalls and personalised follow-up keep patients longer and increase high-value treatments.",
    },
    {
      q: "What does AI automation and visibility typically cost a medical clinic and what payback is realistic?",
      a: "Entry-level tools usually start at $99–$350 per month. Return comes from higher appointment conversion and improved retention. Most clinics see payback within 60–90 days.",
    },
  ],

  "real-estate": [
    {
      q: "Why isn't my real estate agent profile appearing in local searches?",
      a: "Unclaimed or incomplete Google Business Profile, wrong category or low review velocity usually hide agents. Claim and verify an individual agent profile and complete every field.",
    },
    {
      q: "How can real estate agents generate more qualified seller and buyer leads from Google?",
      a: "Add a clear contact link, list service areas and specialties, post listings regularly and ensure the website converts enquiries quickly. Strong Local Pack placement turns searches into qualified leads.",
    },
    {
      q: "Do Google reviews affect whether clients choose me over other agents?",
      a: "Yes. Volume, recency and responses are major trust factors. Agents with consistent recent reviews win more clients. Request reviews after closings and reply to every one.",
    },
    {
      q: "Why do so many enquiries go cold after the first contact?",
      a: "Slow response and lack of systematic follow-up are the main reasons. Fast AI-assisted qualification and automated nurturing keep more leads alive.",
    },
    {
      q: "How can agents respond faster and qualify leads without living on their phone?",
      a: "AI agents that answer initial questions and schedule viewings 24/7 free the agent while capturing and qualifying more leads.",
    },
    {
      q: "Why doesn't my profile or listings appear in ChatGPT or AI property recommendations?",
      a: "AI systems prioritise clear entity data, recent reviews and structured listing information. Incomplete profiles create discovery gaps. Strengthen readable text signals.",
    },
    {
      q: "Can AI agents answer initial lead questions and schedule property viewings automatically?",
      a: "Yes. AI agents handle area questions and availability across channels, then qualify or book viewings while escalating serious leads with full context.",
    },
    {
      q: "How can real estate agents capture and nurture leads that are not ready to buy or sell yet?",
      a: "A simple CRM with automated follow-up sequences keeps longer-term leads warm until they are ready to act.",
    },
    {
      q: "How do agents turn closed clients into consistent referral sources?",
      a: "Timely post-closing follow-up, review requests and exclusive market updates generate ongoing referrals at higher margins.",
    },
    {
      q: "What return can individual agents realistically expect from AI visibility and automation tools?",
      a: "Entry-level tools typically start at $99–$300 per month. Return comes from higher lead conversion and faster response. Most agents see payback within 60–90 days.",
    },
  ],

  "visa-agency": [
    {
      q: "Why isn't my visa agency appearing when people search for consultants locally?",
      a: "Unverified or incomplete Google Business Profile, wrong categories or low review velocity usually prevent visibility. Claim and verify the listing and complete every field.",
    },
    {
      q: "How can visa agencies get more consultation bookings from Google?",
      a: "Add a clear consultation link, list specific visa services and ensure the website converts enquiries quickly. Strong Local Pack placement turns high-intent searches into booked consultations.",
    },
    {
      q: "Do Google reviews influence whether clients choose my agency?",
      a: "Yes. Volume, recency and responses are major trust factors in a high-stakes service. Agencies with consistent recent reviews win more clients. Request reviews after successful cases.",
    },
    {
      q: "Why do many potential clients enquire but never book a paid consultation?",
      a: "Slow response and weak qualification cause drop-off. Fast AI-assisted responses and clear next steps significantly improve conversion.",
    },
    {
      q: "How can visa agencies qualify leads and documents faster without extra staff?",
      a: "AI agents that handle initial process questions and basic document checks free consultants for higher-value work while accelerating the pipeline.",
    },
    {
      q: "Why doesn't my agency appear in ChatGPT or AI immigration recommendations?",
      a: "AI systems prioritise clear entity data, recent reviews and structured service information. Incomplete profiles create discovery gaps. Strengthen readable text signals.",
    },
    {
      q: "Can AI agents answer process questions and book consultations automatically?",
      a: "Yes. AI agents handle overviews and availability 24/7, then guide clients to book while escalating complex cases with context.",
    },
    {
      q: "How can visa agencies capture client data and manage follow-up throughout the case?",
      a: "A simple CRM with automated sequences keeps clients informed and moves cases forward more efficiently.",
    },
    {
      q: "How do visa agencies turn completed cases into referrals and repeat business?",
      a: "Timely follow-up, review requests and exclusive updates generate ongoing referrals at higher margins.",
    },
    {
      q: "What does AI automation and visibility typically cost a visa agency and what ROI is realistic?",
      a: "Entry-level tools usually start at $99–$300 per month. Return comes from higher consultation conversion and faster case progression. Most agencies see payback within 60–90 days.",
    },
  ],

  "car-rental": [
    {
      q: "Why isn't my car rental company showing up in local or airport searches?",
      a: "Unverified or incomplete Google Business Profile, wrong categories or low review velocity usually prevent visibility. Claim and verify a profile for each location and complete every field.",
    },
    {
      q: "How can car rental companies get more direct bookings from Google instead of marketplaces?",
      a: "Add a clear booking link, list vehicle types accurately and ensure the website books quickly. Strong Local Pack placement turns high-intent searches into direct reservations.",
    },
    {
      q: "Do Google reviews affect whether travellers choose my fleet?",
      a: "Yes. Volume, recency and responses are major trust factors. Companies with consistent recent reviews win more bookings. Request reviews after returns and reply to every one.",
    },
    {
      q: "Why do so many potential renters check availability and then leave?",
      a: "Missing real-time availability or multi-step booking causes drop-off. A fast booking path with live fleet data significantly increases conversion.",
    },
    {
      q: "How can car rental companies show real-time fleet availability and reduce booking friction?",
      a: "Integrating live inventory with the website and AI agents removes friction and converts more enquiries into confirmed reservations.",
    },
    {
      q: "Why doesn't my company appear in ChatGPT or AI travel recommendations?",
      a: "AI systems prioritise clear entity data, recent reviews and structured fleet information. Incomplete profiles create discovery gaps. Strengthen readable text signals.",
    },
    {
      q: "Can AI agents answer vehicle questions and complete reservations automatically?",
      a: "Yes. AI agents handle availability, rates and pickup details 24/7, then guide customers to book while escalating complex requests.",
    },
    {
      q: "How can car rental companies capture customer data after a rental for rebooking?",
      a: "Connecting bookings and messaging into a simple CRM enables automated thank-you messages and rebooking offers that increase repeat rentals.",
    },
    {
      q: "How do car rental companies increase repeat rentals without constant discounting?",
      a: "Consistent experience, timely follow-up and exclusive rebooking offers outperform pure discounts and improve lifetime value.",
    },
    {
      q: "What return can independent car rental operators expect from AI visibility and automation?",
      a: "Entry-level tools typically start at $99–$300 per month. Return comes from higher booking conversion and improved repeat rentals. Most operators see payback within 60–90 days.",
    },
  ],

  "social-media-influencer": [
    {
      q: "Why aren't brands finding or contacting my creator profile?",
      a: "Unclear niche, missing contact details, low engagement or inconsistent content reduce discoverability. Tighten the niche, add easy contact methods and focus on engagement metrics.",
    },
    {
      q: "How can influencers get more inbound brand deals and paid collaborations?",
      a: "Maintain clear niche positioning, high engagement, visible contact information and a professional media kit. Brands prioritise fit and results over pure follower count.",
    },
    {
      q: "Do engagement rate and audience quality matter more than follower count for brand deals?",
      a: "Yes. Brands evaluate comments, saves, shares and watch time more than vanity metrics. Creators with strong engagement consistently land more and better deals.",
    },
    {
      q: "Why do many brand enquiries go cold after the first message?",
      a: "Slow response and lack of systematic follow-up cause drop-off. Fast AI-assisted replies and clear next steps keep more opportunities alive.",
    },
    {
      q: "How can creators respond faster and qualify brand deals without constant DMing?",
      a: "AI tools that handle initial enquiries and basic qualification free the creator while capturing more serious opportunities.",
    },
    {
      q: "Why doesn't my content surface in ChatGPT or AI creator recommendations?",
      a: "AI systems prioritise clear niche entity data and consistent signals. Vague positioning creates discovery gaps. Strengthen niche clarity and readable descriptions.",
    },
    {
      q: "Can AI tools help handle brand enquiries and audience questions automatically?",
      a: "Yes. AI agents answer common collaboration and audience questions across channels, then route serious brand enquiries with full context.",
    },
    {
      q: "How can influencers capture and organise brand leads and collaboration history?",
      a: "A simple system that logs enquiries and follow-ups prevents lost opportunities and improves conversion from first contact to paid deal.",
    },
    {
      q: "How do creators turn one-time brand deals into ongoing partnerships and residual income?",
      a: "Consistent delivery, performance reporting and relationship follow-up generate repeat collaborations and residual revenue from affiliates or digital products.",
    },
    {
      q: "What does AI automation and visibility typically cost a creator and what return is realistic?",
      a: "Entry-level tools usually start at $49–$200 per month. Return comes from faster response, higher deal conversion and improved residual income. Most serious creators see payback within 30–60 days.",
    },
  ],
};

/** Related industry slugs for internal linking */
export const relatedIndustries: Record<string, string[]> = {
  hotel: ["restaurant", "bar", "car-rental"],
  restaurant: ["hotel", "bar", "gym"],
  bar: ["restaurant", "hotel", "social-media-influencer"],
  gym: ["dentist", "medical-beauty"],
  dentist: ["medical-beauty", "gym"],
  "medical-beauty": ["dentist", "gym"],
  "real-estate": ["visa-agency"],
  "visa-agency": ["real-estate", "medical-beauty"],
  "car-rental": ["hotel", "restaurant"],
  "social-media-influencer": ["real-estate", "bar"],
};
