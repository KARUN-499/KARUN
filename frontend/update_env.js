const fs = require('fs');
const path = require('path');

const url = process.argv[2];
const key = process.argv[3];

if (!url || !url.startsWith('https') || !key || !key.startsWith('eyJ')) {
  console.log('\n❌ Usage: node update_env.js YOUR_SUPABASE_URL YOUR_ANON_KEY');
  process.exit(1);
}

const envPath = path.join(__dirname, '.env');
const content = `VITE_SUPABASE_URL=${url}\nVITE_SUPABASE_ANON_KEY=${key}\n`;

fs.writeFileSync(envPath, content);
console.log('\n✅ .env file updated successfully!');
console.log('   Now restart your dev server: npm run dev\n');
