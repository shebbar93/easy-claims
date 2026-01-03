import { FileText, Receipt, Upload as UploadIcon } from "lucide-react";
import { ConfigDrawer } from "@/components/config-drawer";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Upload() {
  return (
    <>
      <Header fixed>
        <Search />
        <div className="ms-auto flex items-center space-x-4">
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      <Main className="flex flex-1 flex-col gap-4 sm:gap-6">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="font-bold text-2xl tracking-tight">Upload</h2>
            <p className="text-muted-foreground">
              Import CMS 1500 forms and ERA data to generate secondary claims.
            </p>
          </div>
        </div>

        {/* Two-column upload grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* CMS 1500 Form Upload */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                CMS 1500 Form
              </CardTitle>
              <CardDescription>
                Upload your CMS 1500 claim forms for processing
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <div className="flex flex-1 flex-col items-center justify-center rounded-lg border-2 border-muted-foreground/25 border-dashed bg-muted/50 p-8 transition-colors hover:border-primary/50 hover:bg-muted">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <UploadIcon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Drag and drop your files here</p>
                    <p className="text-muted-foreground text-sm">
                      or click to browse
                    </p>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Accepts PDF, PNG, JPG files
                  </p>
                  <Button variant="outline" className="mt-2">
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Select Files
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ERA Data Upload */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5 text-primary" />
                ERA Data
              </CardTitle>
              <CardDescription>
                Upload Electronic Remittance Advice (ERA) files
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <div className="flex flex-1 flex-col items-center justify-center rounded-lg border-2 border-muted-foreground/25 border-dashed bg-muted/50 p-8 transition-colors hover:border-primary/50 hover:bg-muted">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <UploadIcon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Drag and drop your files here</p>
                    <p className="text-muted-foreground text-sm">
                      or click to browse
                    </p>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Accepts 835 files (EDI format)
                  </p>
                  <Button variant="outline" className="mt-2">
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Select Files
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">
            <UploadIcon className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <Button>Create Secondary Claim(s)</Button>
        </div>
      </Main>
    </>
  );
}
