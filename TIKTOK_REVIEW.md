# TikTok API Review Materials - GTA6 Vault

## 1. APP DESCRIPTION

**Official Description:**
```
GTA6 Vault is a premium news hub for Grand Theft Auto 6. 
It aggregates verified news, leaks, and rumors about GTA 6, 
with every article tagged as Verified, Rumor, or Debunked. 
Users can share content directly to TikTok via our integration.
```

**Extended Description:**
```
GTA6 Vault is the go-to source for Grand Theft Auto 6 news verification and analysis. 
Our editorial team curates breaking news, official announcements, and community reports, 
tagging each piece with one of three categories:

- Verified: Information confirmed from official sources or Rockstar communications
- Rumor: Unconfirmed reports from reliable community members
- Debunked: Misinformation that has been fact-checked and proven false

The TikTok integration allows users to instantly share verified GTA 6 news to their 
TikTok audience, helping spread reliable information across the platform.
```

---

## 2. TERMS OF SERVICE
**URL:** `https://gta6-vault.com/tos.html`
**File:** `public/tos.html` (included in repo)

Key sections:
- User rights & responsibilities
- Content disclaimer (Verified/Rumor/Debunked system)
- No affiliation with Rockstar Games or Take-Two Interactive
- Fan-curated content notice
- TikTok integration clause
- Limitation of liability
- Changes to terms policy

---

## 3. PRIVACY POLICY
**URL:** `https://gta6-vault.com/privacy.html`
**File:** `public/privacy.html` (included in repo)

Key sections:
- Information collected (minimal)
- TikTok data usage (OAuth2 scopes)
- No third-party sharing guarantee
- Data retention periods
- Security practices
- User rights (access, delete, revoke)
- CCPA/GDPR compliance statement

---

## 4. PRODUCT DESCRIPTION (For TikTok Review)

**Integration Overview:**
```
GTA6 Vault uses TikTok Share Kit to allow users to share 
article content directly to TikTok. The integration:
- Pulls article data (title, description, image)
- Allows user to customize caption before posting
- Posts to user's TikTok account with proper attribution
- Scopes used: user.info.basic, video.list, video.publish
```

**Technical Specifications:**
```
Framework: Next.js 16.2.6
Integration: TikTok API v1.0 Share Kit
Authentication: OAuth2.0 with Bearer tokens
Content Types: News articles with image and description
Attribution: Automatic "Shared from GTA6 Vault" in captions
```

**Data Flow:**
1. User clicks "Share to TikTok" button on article page
2. User is redirected to TikTok login (OAuth2)
3. User grants permissions (user.info.basic, video.publish)
4. User customizes caption (optional)
5. Article is posted to TikTok as video with:
   - Article title
   - Description excerpt
   - Hero image
   - Custom caption (user-added)
   - Attribution link to GTA6 Vault

**Safety Features:**
- Content moderation: All articles pre-screened before sharing
- Attribution: Automatic source credit in all posts
- User control: User reviews content before posting
- No automated posting: Always user-initiated
- Rate limiting: 1 post per 5 minutes per user
- Revocation: Users can disconnect TikTok anytime in settings

---

## 5. DEMO VIDEO REQUIREMENTS

**Recording Checklist:**
- [ ] Start at https://gta6-vault.com
- [ ] Navigate to an article
- [ ] Click "Share to TikTok" button
- [ ] Show OAuth2 login flow
- [ ] Grant permissions (clear screen)
- [ ] Show caption customization
- [ ] Click publish
- [ ] Show success confirmation
- [ ] (Optional) Show post on TikTok profile

**Video Specs:**
- Duration: 60-90 seconds
- Format: MP4 (H.264 codec)
- Resolution: 1080p or 720p
- Frame rate: 30fps
- Audio: Optional (BGM with sound effects)
- Quality: Clear, no screen artifacts

**Narrative (voice-over optional):**
```
"GTA6 Vault allows creators to share verified Grand Theft Auto 6 news 
directly to TikTok. Users simply click Share to TikTok, log in, 
customize their caption, and post. Our integration ensures accurate 
sourcing and attribution for every shared article."
```

---

## 6. COMPLIANCE CHECKLIST

- [ ] CCPA compliant (California Consumer Privacy Act)
- [ ] GDPR compliant (General Data Protection Regulation)
- [ ] TikTok Community Guidelines compliant
- [ ] TikTok Developer Agreement accepted
- [ ] OAuth2 security best practices implemented
- [ ] Rate limiting implemented
- [ ] Content attribution required
- [ ] User consent for data sharing
- [ ] Privacy policy publicly available
- [ ] Terms of service publicly available
- [ ] No unauthorized data collection
- [ ] No third-party data sharing

---

## 7. CONTACT INFORMATION

**Company/Project:** GTA6 Vault  
**Website:** https://gta6-vault.com  
**Contact Email:** tips@gta6-vault.com  
**Terms:** https://gta6-vault.com/tos.html  
**Privacy:** https://gta6-vault.com/privacy.html  

---

## 8. SUBMISSION NOTES

This material is prepared for TikTok API review submission. All documents 
are hosted on the main application server and accessible via public URLs.

**Last Updated:** May 14, 2026
