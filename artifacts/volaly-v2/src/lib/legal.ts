// Single source of truth for the operating entity and the version of the
// legal documents. Bump LEGAL_DOCS_VERSION whenever Terms/Privacy change, so
// signups record which version the customer accepted.

export const LEGAL_ENTITY = {
  name: "SmartAI Platforms LLC",
  street: "30 N Gould St Ste N",
  city: "Sheridan, WY 82801",
  country: "United States",
  email: "info@volaly.com",
} as const;

export const LEGAL_DOCS_VERSION = "2025-08-01";
