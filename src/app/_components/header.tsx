"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={45} height={45} />
        <h2 className="text-xl font-bold">
          <span className="text-primary">Tutor</span>Stack
        </h2>
      </div>
      <ul className="flex gap-8 items-center">
        <li className="text-lg hover:text-primary font-medium">
          <Link href="/">Home</Link>
        </li>
        <li className="text-lg hover:text-primary font-medium">
          <Link href="/pricing">Pricing</Link>
        </li>
      </ul>
      {user ? (
        <UserButton />
      ) : (
        <SignInButton mode="modal">
          <Button>Get Started</Button>
        </SignInButton>
      )}
    </div>
  );
}

export default Header;
