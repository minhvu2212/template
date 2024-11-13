import React from 'react';
import { 
  Search, 
  MoreHorizontal, 
  Phone, 
  Video, 
  Info, 
  Plus, 
  ThumbsUp 
} from 'lucide-react';

const MessengerClone = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-[360px] border-r border-gray-200 flex flex-col overflow-hidden">
        {/* Search Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold">Đoạn chat</h1>
            <button className="ml-auto p-2 hover:bg-gray-100 rounded-full">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="mt-2 relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm trên Messenger"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none"
            />
          </div>
          <div className="flex mt-2 space-x-1">
            <button className="px-4 py-1.5 text-blue-600 bg-blue-50 rounded-full text-sm font-medium hover:bg-blue-100">
              Hộp thư
            </button>
            <button className="px-4 py-1.5 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">
              Cộng đồng
            </button>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-gray-300 flex-shrink-0" />
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">User Name</h3>
                  <span className="text-xs text-gray-500 ml-2 flex-shrink-0">39 phút</span>
                </div>
                <p className="text-sm text-gray-500 truncate">
                  Last message preview...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="h-[60px] border-b border-gray-200 flex items-center px-4 flex-shrink-0">
          <div className="flex items-center flex-1">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div className="ml-3">
              <h2 className="font-semibold text-gray-900">Vũ, Trưởng, Vũ, Nguyên</h2>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Phone className="w-5 h-5 text-blue-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Video className="w-5 h-5 text-blue-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Info className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-white">
          <div className="flex items-start mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
            <div className="ml-2 bg-gray-100 rounded-2xl px-4 py-2 max-w-md">
              <p className="text-gray-900">à vì backend cũ lỗi</p>
              <p className="text-gray-900">nên đăng kí nhớ dưới hust.edu.vn nhé</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-3 bg-white">
          <div className="flex items-center bg-white rounded-full">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Plus className="w-5 h-5 text-gray-600" />
            </button>
            <input
              type="text"
              placeholder="Aa"
              className="flex-1 mx-4 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none"
            />
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ThumbsUp className="w-5 h-5 text-blue-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[360px] border-l border-gray-200 bg-white">
        <div className="flex flex-col py-2">
          <button className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm">
            Thông tin về đoạn chat
          </button>
          <button className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm">
            Tùy chỉnh đoạn chat
          </button>
          <button className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm">
            Tùy chọn nhóm
          </button>
          <button className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm">
            Thành viên trong đoạn chat
          </button>
          <button className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm">
            File phương tiện, file và liên kết
          </button>
          <button className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm">
            Quyền riêng tư & hỗ trợ
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessengerClone;