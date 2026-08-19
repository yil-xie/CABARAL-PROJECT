import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Hello World" />

            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="rounded-lg bg-white p-10 text-center shadow-md">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Hello World!
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Welcome to my Vlogggg ma'am Kayeeee!!!!!.
                    </p>
                </div>
            </div>
        </>
    );
}