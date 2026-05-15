# Discord Community Setup Guide

## Server Information
- **Server Name**: GTA6 Vault
- **Invite Link**: https://discord.gg/FGkBeR3hf

## Channel Structure to Create

### Information Channels
1. **#welcome** - Welcome message and server rules
   - Pin welcome message with server guidelines
   - Include links to newsletter and website

2. **#announcements** - Important updates from Vault team
   - Restricted: Only Moderators can post
   - Auto-post new verified articles from website

### Content Channels
3. **#breaking-news** - Latest breaking updates (real-time)
   - Topic: Breaking GTA6 news and announcements
   - Fastest moving channel

4. **#verified-articles** - Published articles from GTA6 Vault
   - Auto-post new articles with links
   - Topic: Official GTA6 Vault news

5. **#rumors-and-leaks** - Unconfirmed rumors and leak discussions
   - Topic: RUMOR-tagged articles and credible speculation

6. **#discussion** - General discussion about GTA6
   - Theories, gameplay discussion, expectations

### Community Channels
7. **#off-topic** - Non-GTA6 discussion
   - Memes, introductions, general chat

8. **#links** - Shared resources and links
   - Topic: GTA6 media, trailers, official sources

## Roles to Create

### User Roles
1. **@Member** - Auto-assign to new members
   - Access all channels
   - Can send messages

2. **@Moderator** - Manual assignment
   - Can manage messages
   - Can mute/ban users
   - Can post in #announcements
   - Display color: Pink (#ff006e)

3. **@Verified** - For contributors/insiders
   - Display color: Cyan (#00d9ff)

## Welcome Message Template

```
╔════════════════════════════════════════╗
║         🎮 Welcome to GTA6 Vault 🎮    ║
╚════════════════════════════════════════╝

We're the most verified source for Grand Theft Auto 6 news.
**November 19, 2026** 👀

📋 **Server Guidelines**
→ Be respectful to all members
→ No spoiler-heavy discussions in #general
→ Use threads for extended conversations
→ Mark NSFW content appropriately

📰 **Content Categories**
✓ #breaking-news - Real-time updates
✓ #verified-articles - Official Vault stories
✓ #rumors-and-leaks - Unconfirmed rumors
✓ #discussion - GTA theories & hype

🔗 **Stay Connected**
→ Newsletter: https://gta6-vault.com/newsletter
→ Website: https://gta6-vault.com
→ Twitter: @gta6vault
→ TikTok: @gta6.vault

Have fun and stay hyped! 🚀
```

## Integration Tasks

### 1. Auto-Post Articles (Webhook or Bot)
- Set up webhook from gta6-vault.com/api to Discord
- On new article publication, post to #verified-articles
- Include article title, excerpt, and link
- Add article status badge (VERIFIED/RUMOR/DEBUNKED)

### 2. Daily Digest Role
- Ping @everyone or specific role daily at 9 AM CET
- Post daily digest of top 3 articles

### 3. Moderation Tools
- Set up AutoMod for spam prevention
- Configure role-based permissions
- Set retention policy (30 days for #breaking-news, longer for others)

## Additional Configuration

### Server Settings
- **Verification Level**: Medium (must have verified email)
- **Default Notification**: Only @mentions
- **Explicit Content**: Safe

### Channel Slowmode Recommendations
- #breaking-news: 2 second slowmode (prevent spam)
- #discussion: Normal
- #off-topic: Normal

## Future Enhancements
- Integration with Beehiiv newsletter (embed signup form in #welcome)
- Custom Discord bot for article fetching
- Reaction-based role assignment
- Automated VERIFY-tagged article announcements
