import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/users", (resolver) => {
    return HttpResponse.json({
      users: [
        { id: 1, name: "Frank" },
        { id: 2, name: "Chester" },
      ],
    });
  }),
];
