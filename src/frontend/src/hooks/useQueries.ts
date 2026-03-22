import type { ContactMessage, VendorInquiry } from "@/backend";
import { useActor } from "@/hooks/useActor";
import { useMutation } from "@tanstack/react-query";

export function useSubmitVendorInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: (inquiry: VendorInquiry) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitVendorInquiry(inquiry);
    },
  });
}

export function useSubmitContactMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: (message: ContactMessage) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactMessage(message);
    },
  });
}
