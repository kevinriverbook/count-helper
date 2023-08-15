import TextCounter from '@/app/components/TextCounter';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <h1 className="text-slate-900 text-4xl font-bold mb-2">CountHelper</h1>
      <p className="text-slate-500 mb-8">レポート・ESなどに使える文字数カウンター</p>
      <TextCounter />
      <footer className="mt-32 text-slate-400">&copy; 2023 Naoki Kawamoto</footer>
    </div>
  );
};
