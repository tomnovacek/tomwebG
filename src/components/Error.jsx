import React from 'react'
import { motion } from 'framer-motion'
import { FaExclamationTriangle } from 'react-icons/fa'

export const Error = ({ message = 'Something went wrong' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-2xl mx-auto bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center gap-3 text-red-600 mb-4">
          <FaExclamationTriangle className="text-xl" />
          <h2 className="text-xl font-semibold">Error</h2>
        </div>
        <p className="text-gray-700">{message}</p>
      </div>
    </motion.div>
  )
} 