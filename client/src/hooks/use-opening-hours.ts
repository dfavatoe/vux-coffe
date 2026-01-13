import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useOpeningHours() {
  return useQuery({
    queryKey: [api.openingHours.list.path],
    queryFn: async () => {
      const res = await fetch(api.openingHours.list.path);
      if (!res.ok) throw new Error("Failed to fetch opening hours");
      return api.openingHours.list.responses[200].parse(await res.json());
    },
  });
}
