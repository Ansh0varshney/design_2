import { ForestScene } from "@/components/landing/ForestScene";
import { LoginForm } from "@/components/auth/LoginForm";

export function Landing() {
  return (
    <div className="relative min-h-screen">
      <ForestScene />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}