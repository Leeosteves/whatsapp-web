import ChatPanel from '~/pages/chat-message';
import Drawer from '~/components/Drawer';
import '~/styles/globals.css'
import { getDictionary } from '~/utils/locales/dictionaries';

export default async function MyApp({ params }: { params: { lang: 'en' | 'pt' | 'es' | 'ar' } }) {
  const { lang } = await params;
  const dict = await getDictionary(lang)
  return (
    <div className='flex h-dvh w-screen relative'>
      <Drawer dict={dict.drawer} />
      <ChatPanel />
    </div>
  );
}

