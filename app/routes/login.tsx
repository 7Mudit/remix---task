import { ActionFunction } from "@remix-run/node";
import { Form, redirect, useActionData } from "@remix-run/react";

interface ActionData {
  error?: string;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  // basic authentication check
  if (username === "admin" && password === "password") {
    return redirect("/index"); // Redirects to the index page upon successful login
  }

  return { error: "Invalid credentials" }; // Returns an error if credentials are incorrect
};

export default function Login() {
  const actionData = useActionData<ActionData>(); // Retrieves action data from the server

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <Form
        method="post"
        className="max-w-md mx-auto bg-white p-8 border border-gray-300"
      >
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {actionData?.error && (
          <p className="text-red-500 mt-2">{actionData.error}</p>
        )}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Log In
          </button>
        </div>
      </Form>
    </div>
  );
}
