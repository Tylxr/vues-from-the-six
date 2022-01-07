<script setup>
import { ref } from 'vue';

// Temporary
const conversations = ref([
    {
        name: 'Jessie Nelson',
        avatar: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg',
        timeFormatted: '17:49',
        message: 'Did you want to go there tomorrow?',
        notifications: 2,
        status: 'online'
    },
    {
        name: 'Thomas Dixon',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        timeFormatted: '13:24',
        message: 'Sounds good to me.',
        notifications: 1,
        status: 'away'
    },
    {
        name: 'Alex Jones',
        avatar: 'https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg',
        timeFormatted: '12:48',
        message: 'The weather is hot and the beaches are beautiful. Life is good!',
        notifications: 0,
        status: 'away',
        active: true
    },
    {
        name: 'Abbie Smith',
        avatar: 'https://maundymitchell.com/wp-content/uploads/2019/09/Actor-Headshot-on-White-Background_0003-1024x683.jpg',
        timeFormatted: '11:03',
        message: 'That\'s good to hear. I\'m glad he\'s doing so well for himself.',
        notifications: 0,
        status: 'offline'
    },
]);

const authorDetails = ref({
    name: 'Alex Jones',
    avatar: 'https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg',
    lastOnlineFormatted: 'About 1hr ago'
});

const messages = ref([
    {
        type: 'sent',
        timeFormatted: '09:00',
        message: "Hey. How have you been?"
    },
    {
        type: 'sent',
        timeFormatted: '09:04',
        message: "I've been so busy these last few months. Sorry I couldn't message you until now."
    },
    {
        type: 'received',
        timeFormatted: '09:09',
        message: "Hi Tyler! I've been doing well thank you. How are things with the new puppy?"
    },
    {
        type: 'sent',
        timeFormatted: '09:15',
        message: "They're going well. He's definitely a handful. How is life in Spain?"
    },
    {
        type: 'received',
        timeFormatted: '09:26',
        message: "Good to hear!"
    },
    {
        type: 'received',
        timeFormatted: '09:26',
        message: "The weather is hot and the beaches are beautiful. Life is good!"
    }
].reverse());

</script>

<template>
    <!-- Navigation Header Component -->
    <div class="nav-container flex justify-between bg-white border-b-gray-200 border-b-2">
        <div class="logo-container flex items-center p-5">
            <ul class="flex justify-between items-center text-3xl">
                <li>
                    <font-awesome-icon class="text-cyan-500 text-5xl" :icon="['fas', 'sms']" />
                </li>
                <li>
                    <span class="italic">Chattr</span>
                </li>
            </ul>
        </div>
        <div class="navigation flex p-7 items-center">
            <ul class="flex justify-between text-sm uppercase items-center">
                <li class="ml-4 active">Chat</li>
                <li class="ml-4">Conversations</li>
                <li class="ml-4">Discover</li>
                <li class="ml-4 relative">
                    <font-awesome-icon class="text-2xl" :icon="['far', 'bell']" />
                    <span class="h-2 w-2 top-0 right-0 absolute rounded-full bg-orange-400"></span>
                </li>
            </ul>
        </div>
    </div>

    <!-- Chat Page/Route -->
    <div class="chat-page flex bg-gray-200">
        <!-- MiniConversation Component -->
        <div class="mini-conversation-container w-1/3 bg-gray-200 overflow-y-scroll pb-4">
            <!-- Search Component -->
            <div class="search relative m-4">
                <input
                    type="text"
                    class="rounded-xl w-full h-full px-4 py-2 pl-9 focus:outline-none"
                    placeholder="Search"
                />
                <font-awesome-icon
                    class="text-slate-500 absolute top-0 left-2 h-full"
                    :icon="['fas', 'sms']"
                />
            </div>

            <h4 class="ml-4 mb-1 italic text-gray-600">Recent Conversations</h4>

            <div
                v-for="(convo, index) in conversations"
                :key="index"
                class="conversation-container text-sm"
            >
                <!-- Lots of these -->
                <div
                    :class="['conversation cursor-pointer hover:bg-gray-50 bg-white flex mx-4 border-b-2 border-b-gray-100',
                        index === 0 ? 'rounded-t-xl' : '',
                        index === conversations.length - 1 ? 'rounded-b-xl' : '',
                        convo.active ? 'bg-gray-100 border-b-0 border-l-2 border-cyan-500' : ''
                    ]"
                >
                    <div class="avatar relative m-2 shrink-0">
                        <img
                            :src="convo.avatar"
                            alt="Profile Picture"
                            class="rounded-full w-10 h-10 object-cover"
                        />
                        <span
                            :class="['h-3 w-3 bottom-0 right-0 absolute rounded-full ',
                            convo.status === 'online' ? 'bg-green-400' : convo.status === 'away' ? 'bg-orange-300' : 'bg-gray-200']"
                        ></span>
                    </div>
                    <div class="details flex-grow m-2 min-w-0">
                        <div class="flex justify-between">
                            <!-- if message, bold -->
                            <span :class="convo.notifications ? 'font-bold' : ''">{{ convo.name }}</span>
                            <span>{{ convo.timeFormatted }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="last-message text-gray-500 truncate">{{ convo.message }}</span>
                            <!-- if notification -->
                            <div
                                v-if="convo.notifications"
                                class="notification-count ml-2 rounded-xl bg-orange-400 text-white min-w-0 w-3 h-3 flex justify-center items-center"
                            >
                                <span>{{ convo.notifications }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Chat Component -->
        <div class="chat-container w-2/3 flex-col relative bg-white rounded-b-xl">
            <div
                class="recipient-details bg-gray-200 rounded-xl m-4 p-2 flex justify-start items-center"
            >
                <img
                    :src="authorDetails.avatar"
                    alt="Profile Picture"
                    class="rounded-full h-12 w-12 object-cover"
                />
                <div class="flex flex-col ml-4">
                    <span class="inline-block">{{ authorDetails.name }}</span>
                    <span
                        class="inline-block text-xs -mt-1 text-gray-500"
                    >{{ authorDetails.lastOnlineFormatted }}</span>
                </div>
            </div>
            <div class="messages-container overflow-y-scroll flex flex-col-reverse">
                <div
                    v-for="(message, index) in messages"
                    :class="['w-2/3', message.type === 'sent' ? 'self-end' : 'self-start']"
                    :key="index"
                >
                    <div
                        :class="['flex', message.type === 'sent' ? 'justify-end' : 'justify-start']"
                    >
                        <div
                            v-if="message.type === 'received' && messages[index + 1]?.type !== 'received'"
                            class="shrink-0 ml-4"
                        >
                            <img
                                :src="authorDetails.avatar"
                                alt="Profile Picture"
                                class="rounded-full w-12 h-12 object-cover"
                            />
                            <span
                                class="text-xs text-center block text-gray-400"
                            >{{ message.timeFormatted }}</span>
                        </div>
                        <div
                            class="shrink-0 ml-4 w-12"
                            v-if="message.type === 'received' && messages[index + 1]?.type === 'received'"
                        ></div>
                        <span
                            :class="['bg-gray-300 p-3 block mx-4 rounded-xl text-sm',
                                messages[index - 1]?.type !== message.type ? 'mb-6' : 'mb-1',
                                message.type === 'sent' ? 'rounded-tr-none bg-cyan-600 text-white' : 'rounded-tl-none bg-gray-300',
                                index + 1 === messages.length ? 'mt-6' : ''
                            ]"
                        >{{ message.message }}</span>
                    </div>
                </div>
            </div>
            <div class="chat-box bg-gray=100 h-14 flex justify-between items-center rounded-b-xl">
                <div class="relative flex w-full mx-4">
                    <input
                        type="text"
                        class="chat-input bg-gray-100 rounded-xl w-full h-full pl-9 pr-2 py-2 focus:outline-none"
                        placeholder="Search"
                    />
                    <font-awesome-icon
                        class="text-slate-500 absolute top-0 left-2 h-full"
                        :icon="['fas', 'sms']"
                    />
                </div>
                <span
                    class="bg-cyan-500 hover:bg-cyan-400 mr-4 rounded-full h-9 w-10 cursor-pointer items-center flex justify-center"
                >
                    <font-awesome-icon class="text-white" :icon="['fas', 'paper-plane']" />
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav-container {
    height: 95px;

    li {
        margin-left: 12px;
    }
    .navigation {
        li {
            margin-left: 24px;

            &.active {
                color: rgb(6, 182, 212);
                font-weight: bold;
            }
        }
    }
}

.chat-page {
    height: calc(100% - 95px);

    .conversation {
        .last-message {
            font-size: 12px;
        }
        .notification-count {
            font-size: 10px;
            min-width: 12px;
            min-height: 12px;
        }
    }

    .chat-container {
        .messages-container {
            height: calc(100% - 160px);
        }
    }
}
</style>
