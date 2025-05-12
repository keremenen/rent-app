"use client";

import { logOut } from "@/actions/actions";
import { Button } from "./ui/button";

export default function LogOutBtn() {
  return <Button onClick={async () => await logOut()}>LogOut</Button>;
}
