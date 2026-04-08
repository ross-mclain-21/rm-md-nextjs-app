import { describe, expect, it } from "vitest";
import { LEGACY_ROUTE_KEYS, legacyRouteRedirects } from "@/lib/legacy-routes";

describe("legacy route redirects", () => {
  it("contains expected legacy entries", () => {
    expect(legacyRouteRedirects["/portfolio"]).toBe("/work");
    expect(legacyRouteRedirects["/services"]).toBe("/#work-with-me");
    expect(legacyRouteRedirects["/theosCelebration"]).toBe("/labs/theos-celebration");
  });

  it("exports all keys for route registration", () => {
    expect(LEGACY_ROUTE_KEYS).toContain("/external");
    expect(LEGACY_ROUTE_KEYS).toContain("/profile");
  });
});
