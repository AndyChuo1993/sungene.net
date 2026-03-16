'use client'
import { useState } from 'react'
import { Lang } from '@/lib/i18n'

export default function Newsletter({ lang }: { lang: Lang }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    
    // Simulate API call
    // In a real app, this would be POST /api/subscribe
    setTimeout(() => {
        // Mock success
        setStatus('success')
        setMsg(lang === 'zh' ? '訂閱成功！' : 'Subscribed successfully!')
        setEmail('')
    }, 1000)
  }

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-sm text-white shadow-lg border border-blue-700">
        <h3 className="font-bold mb-2 text-lg text-white">{lang === 'zh' ? '訂閱電子報' : 'Subscribe'}</h3>
        <p className="text-sm text-blue-100 mb-4 leading-relaxed">
            {lang === 'zh' ? '每週獲取最新的外銷開發技巧與市場分析。' : 'Get weekly export tips and market analysis.'}
        </p>
        
        {status === 'success' ? (
            <div className="bg-green-500/20 border border-green-400 text-green-100 p-3 rounded-sm text-sm text-center">
                {msg}
            </div>
        ) : (
            <form onSubmit={handleSubscribe}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-sm text-gray-900 mb-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none bg-white placeholder-gray-500" 
                />
                <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 rounded-sm text-sm transition duration-300 shadow-md disabled:opacity-70"
                >
                    {status === 'loading' ? (lang === 'zh' ? '處理中...' : 'Processing...') : (lang === 'zh' ? '免費訂閱' : 'Subscribe Free')}
                </button>
                <p className="text-xs text-blue-300 mt-3 text-center">
                    {lang === 'zh' ? '隨時可取消訂閱。' : 'Unsubscribe at any time.'}
                </p>
            </form>
        )}
    </div>
  )
}
