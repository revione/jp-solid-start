import RedirectHome from "~/components/RedirectHome";

export default function NotFound() {
  return (
    <main class="w-full p-4 space-y-2 hidden" $ServerOnly>
      <RedirectHome />
      <h1 class="font-bold text-xl">Page Not Found</h1>
      <a href="/">Return</a>
    </main>
  );
}
