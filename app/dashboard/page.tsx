'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { Header } from '@/components/dashboard/header'
import { DashboardOverview } from '@/components/dashboard/overview'
import { MemberManagement } from '@/components/dashboard/member-management'
import { DeadlineAlerts } from '@/components/dashboard/deadline-alerts'
import { DocumentForms } from '@/components/dashboard/document-forms'
import { ChatBot } from '@/components/dashboard/chatbot'

export type TabType = 'overview' | 'members' | 'deadlines' | 'documents'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [isChatOpen, setIsChatOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />
      case 'members':
        return <MemberManagement />
      case 'deadlines':
        return <DeadlineAlerts />
      case 'documents':
        return <DocumentForms />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col">
        <Header onChatOpen={() => setIsChatOpen(true)} />
        
        <main className="flex-1 p-6 overflow-auto">
          <div key={activeTab} className="animate-scale-in">
            {renderContent()}
          </div>
        </main>
      </div>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}
