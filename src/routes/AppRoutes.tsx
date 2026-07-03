import { Route, Routes } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/Home/HomePage';
import { LoginPage } from '../pages/Login/LoginPage';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import { NewRidePage } from '../pages/NewRide/NewRidePage';
import { RankingPage } from '../pages/Ranking/RankingPage';
import { BadgesPage } from '../pages/Badges/BadgesPage';
import { ProfilePage } from '../pages/Profile/ProfilePage';
import { AdminPage } from '../pages/Admin/AdminPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/new-ride" element={<NewRidePage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/badges" element={<BadgesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}