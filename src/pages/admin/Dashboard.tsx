import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChatBubbleLeftIcon,
  EyeIcon,
  CalendarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  PlusIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
  totalPages: number;
  totalPosts: number;
  totalUsers: number;
  totalViews: number;
  recentActivity: ActivityItem[];
  contentStats: ContentStats;
  popularPages: PopularPage[];
}

interface ActivityItem {
  id: string;
  type: 'page' | 'post' | 'user' | 'comment';
  title: string;
  user: string;
  timestamp: string;
  action: string;
}

interface ContentStats {
  published: number;
  draft: number;
  archived: number;
}

interface PopularPage {
  title: string;
  views: number;
  trend: 'up' | 'down' | 'stable';
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [stats] = useState<DashboardStats>({
    totalPages: 12,
    totalPosts: 24,
    totalUsers: 8,
    totalViews: 15420,
    recentActivity: [
      { id: '1', type: 'post', title: 'New AI Development Trends', user: 'John Doe', timestamp: '2 hours ago', action: 'published' },
      { id: '2', type: 'page', title: 'About Us Page', user: 'Jane Smith', timestamp: '4 hours ago', action: 'updated' },
      { id: '3', type: 'user', title: 'Mike Johnson', user: 'Admin', timestamp: '6 hours ago', action: 'created' },
      { id: '4', type: 'post', title: 'Mobile App Development Guide', user: 'Sarah Wilson', timestamp: '1 day ago', action: 'published' },
    ],
    contentStats: { published: 28, draft: 8, archived: 4 },
    popularPages: [
      { title: 'Home Page', views: 5420, trend: 'up' },
      { title: 'Services', views: 3210, trend: 'up' },
      { title: 'About Us', views: 2180, trend: 'stable' },
      { title: 'Contact', views: 1890, trend: 'down' },
    ]
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading dashboard data
    const loadDashboardData = async () => {
      setIsLoading(true);
      // In a real app, you would fetch this from your API
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    loadDashboardData();
  }, []);

  const StatCard = ({ icon: Icon, title, value, change, changeType }: {
    icon: any;
    title: string;
    value: string | number;
    change?: string;
    changeType?: 'positive' | 'negative';
  }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {changeType === 'positive' ? (
                <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
              ) : (
                <ArrowTrendingDownIcon className="h-4 w-4 mr-1" />
              )}
              <span>{change}</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${
          title.includes('Pages') ? 'bg-blue-100 text-blue-600' :
          title.includes('Posts') ? 'bg-green-100 text-green-600' :
          title.includes('Users') ? 'bg-purple-100 text-purple-600' :
          'bg-orange-100 text-orange-600'
        }`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );

  const ActivityCard = ({ activity }: { activity: ActivityItem }) => {
    const getIcon = (type: string) => {
      switch (type) {
        case 'post': return DocumentTextIcon;
        case 'page': return DocumentTextIcon;
        case 'user': return UserGroupIcon;
        case 'comment': return ChatBubbleLeftIcon;
        default: return DocumentTextIcon;
      }
    };

    const Icon = getIcon(activity.type);

    return (
      <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
        <div className={`p-2 rounded-lg flex-shrink-0 ${
          activity.type === 'post' ? 'bg-green-100 text-green-600' :
          activity.type === 'page' ? 'bg-blue-100 text-blue-600' :
          activity.type === 'user' ? 'bg-purple-100 text-purple-600' :
          'bg-yellow-100 text-yellow-600'
        }`}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
          <p className="text-sm text-gray-500">
            {activity.action} by {activity.user} • {activity.timestamp}
          </p>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user?.firstName}! 👋
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Here's what's happening with your website today.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <Cog6ToothIcon className="h-4 w-4 mr-2" />
            Settings
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Content
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={DocumentTextIcon}
          title="Total Pages"
          value={stats.totalPages}
          change="+12%"
          changeType="positive"
        />
        <StatCard
          icon={DocumentTextIcon}
          title="Blog Posts"
          value={stats.totalPosts}
          change="+8%"
          changeType="positive"
        />
        <StatCard
          icon={UserGroupIcon}
          title="Team Members"
          value={stats.totalUsers}
          change="+2"
          changeType="positive"
        />
        <StatCard
          icon={EyeIcon}
          title="Total Views"
          value={stats.totalViews}
          change="+24%"
          changeType="positive"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Overview */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Content Overview</h3>
              <ChartBarIcon className="h-5 w-5 text-gray-400" />
            </div>
            
            {/* Content Stats Chart */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Published</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{stats.contentStats.published}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${(stats.contentStats.published / 40) * 100}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Draft</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{stats.contentStats.draft}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full" 
                  style={{ width: `${(stats.contentStats.draft / 40) * 100}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Archived</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{stats.contentStats.archived}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gray-500 h-2 rounded-full" 
                  style={{ width: `${(stats.contentStats.archived / 40) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Popular Pages */}
            <div className="mt-8">
              <h4 className="text-md font-medium text-gray-900 mb-4">Popular Pages</h4>
              <div className="space-y-3">
                {stats.popularPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">{page.title}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{page.views.toLocaleString()} views</span>
                      {page.trend === 'up' ? (
                        <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
                      ) : page.trend === 'down' ? (
                        <ArrowTrendingDownIcon className="h-4 w-4 text-red-500" />
                      ) : (
                        <div className="h-4 w-4 bg-gray-300 rounded-full" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <CalendarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-1">
              {stats.recentActivity.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                View all activity →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-3" />
            <span className="text-sm font-medium text-gray-900">Create Page</span>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <DocumentTextIcon className="h-6 w-6 text-green-600 mr-3" />
            <span className="text-sm font-medium text-gray-900">Write Post</span>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <UserGroupIcon className="h-6 w-6 text-purple-600 mr-3" />
            <span className="text-sm font-medium text-gray-900">Add User</span>
          </button>
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Cog6ToothIcon className="h-6 w-6 text-gray-600 mr-3" />
            <span className="text-sm font-medium text-gray-900">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
