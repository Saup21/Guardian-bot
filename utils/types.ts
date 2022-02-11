// Types of objects that are being used

// API body

export type APIBody = {
    strictness: number;
    fast: boolean;
};

// Response object;

type Domain = {
    human: string;
    timestamp: Date;
    iso: string;
};

export type Response = {
    message: string;
    success: boolean;
    request_id: string;
    unsafe?: boolean;
    domain?: string;
    ip_address?: string;
    server?: string;
    content_type?: string;
    status_code?: number;
    page_size?: number;
    domain_rank?: number;
    dns_valid?: boolean;
    parking?: boolean;
    spamming?: boolean;
    malware?: boolean;
    phishing?: boolean;
    suspicious?: boolean;
    adult?: boolean;
    risk_score?: number;
    domain_age?: Domain;
    category?: string;
};

// Result object

export type Result = {
    success: boolean;
    msg: string;
    threat_code?: number;
    color?: any;
    error?: boolean;
};
