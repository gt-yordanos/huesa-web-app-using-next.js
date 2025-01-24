"use client"
import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People'; // Icon for "Members"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';

const HUESA_LOGO_URL = 'https://path-to-your-logo/huesa-logo.png';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Huesa', // Simple string for compatibility
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'events',
    title: 'Events',
    icon: <EventIcon />,
  },
  {
    segment: 'certificates',
    title: 'Certificates',
    icon: <WorkspacePremiumIcon />,
  },
  {
    segment: 'members',
    title: 'Members',
    icon: <PeopleIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'logout',
    title: 'Logout',
    icon: <ExitToAppIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props: any) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src={HUESA_LOGO_URL} alt="HUESA logo" />,
        title: 'HUESA',
        homeUrl: '/toolpad/core/introduction',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>

            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>

            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
