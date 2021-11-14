import Pusher from "pusher";

export const pusher = new Pusher({
  appId: "1297043",
  key: "5fe9111125a1b8097e5f",
  secret: "93aaa1d2179495974f2d",
  cluster: "ap2",
  useTLS: true
});