# Beehiiv Signup Form Integration

## Steps to Get Your Embed Code

1. Log in to your Beehiiv dashboard at https://beehiiv.com
2. Go to **Settings** (⚙️ icon in the left sidebar)
3. Navigate to **Website** or **Integrations** tab
4. Look for **Embed Code** or **HTML Snippet** section
5. Find your signup form embed - it will look like:

```html
<iframe src="https://embeds.beehiiv.com/c/..." width="100%" height="320"></iframe>
```

OR

```html
<script src="https://www.beehiiv.com/static/build/beehiiv-form-embed.js"></script>
<script>
  BeehiivEmbed.renderForm({
    formId: "YOUR_FORM_ID",
    utm_campaign: "gta6-vault"
  });
</script>
```

## Integration Steps

Once you have your embed code:

1. Copy the entire embed code (iframe tag or script tag)
2. Open `/app/newsletter/page.js`
3. Replace the `{/* Beehiiv signup form embed code will be inserted here */}` comment with your actual embed code
4. That's it! The form will appear on the /newsletter page

## Alternative: Custom Form Component

If you want more customization, you can create a dedicated Beehiiv component:

Create file: `/components/BeehiivForm.jsx`

```jsx
export default function BeehiivForm() {
  return (
    <div id="beehiiv-form" dangerouslySetInnerHTML={{
      __html: `YOUR_EMBED_CODE_HERE`
    }} />
  );
}
```

Then import and use it in `/app/newsletter/page.js`:

```jsx
import BeehiivForm from "@/components/BeehiivForm";

// In the JSX:
<BeehiivForm />
```

## Current Placeholder

The newsletter page already has a placeholder container:
`<div id="beehiiv-embed-container">`

Just add your embed code inside this container.
