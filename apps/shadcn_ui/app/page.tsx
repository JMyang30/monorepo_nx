import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@nx/ui-components';
import { MeButton } from './MeButton';

export default async function Index() {
  return (
    <div className="min-h-screen bg-muted flex justify-center items-center flex-col gap-2">
      <MeButton />
      <DropdownMenu>
        <DropdownMenuTrigger>
          {/* <Button variant="outline">Open Menu</Button> */}
          open menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
