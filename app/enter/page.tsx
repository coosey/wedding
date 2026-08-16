import { unlock } from "./actions";

export default function EnterPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-stone-100 px-4 py-8 sm:px-6">
      <section className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
          Welcome
        </h1>
        <p className="mt-2 text-sm leading-6 text-stone-600 sm:text-base">
          Enter the password from your invitation to continue.
        </p>

        <form action={unlock} className="mt-6 space-y-4 sm:mt-7">
          <label
            className="block text-sm font-medium text-stone-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-base text-stone-900 outline-none ring-0 placeholder:text-stone-400 focus:border-stone-500"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            Enter Site
          </button>
        </form>
      </section>
    </main>
  );
}
