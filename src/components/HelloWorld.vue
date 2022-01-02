<script setup>
</script>

<template>
    <div>
        <!-- <font-awesome-icon :icon="['fas', 'sms']" /> -->
    </div>

    <!-- Navigation Header Component -->
    <div class="nav-container flex justify-between bg-white">
        <div class="logo-container flex items-center p-7">
            <ul class="flex justify-between text-3xl">
                <li>
                    <font-awesome-icon class="text-cyan-500" :icon="['fas', 'sms']" />
                </li>
                <li>
                    <span class="italic">Chattr</span>
                </li>
            </ul>
        </div>
        <div class="navigation flex p-7 items-center">
            <ul class="flex justify-between text-sm font-bold uppercase items-center">
                <li class="ml-4 active">Chat</li>
                <li class="ml-4">Conversations</li>
                <li class="ml-4">Discover</li>
                <li class="ml-4">
                    <font-awesome-icon class="text-2xl" :icon="['far', 'bell']" />
                </li>
            </ul>
        </div>
    </div>

    <!-- Chat Page/Route -->
    <div class="chat-page flex h-full">
        <!-- MiniConversation Component -->
        <div class="mini-conversation-container w-1/3 bg-gray-200">
            <!-- Search Component -->
            <div class="search relative m-4">
                <input
                    type="text"
                    class="bg-blue rounded-xl w-full h-full px-4 py-2 pl-9 focus:outline-none"
                    placeholder="Search"
                />
                <font-awesome-icon
                    class="text-slate-500 absolute top-0 left-2 h-full"
                    :icon="['fas', 'sms']"
                />
            </div>

            <div class="conversation-container text-sm">
                <h4 class="ml-4 mb-1 italic text-gray-600">Recent Conversations</h4>
                <!-- Lots of these -->
                <div
                    class="conversation bg-white flex mx-4 rounded-t-lg border-b-2 border-b-gray-300"
                >
                    <div class="avatar relative m-2">
                        <img
                            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                            alt="Profile Picture"
                            class="rounded-full w-10 h-10"
                        />
                        <span class="h-3 w-3 bottom-0 right-0 absolute rounded-full bg-green-400"></span>
                    </div>
                    <div class="details flex-grow m-2">
                        <div class="flex justify-between">
                            <!-- if message, bold -->
                            <span class="font-bold">Jessie Nelson</span>
                            <span>09:00</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span
                                class="last-message text-gray-500"
                            >Did you want to go there tomorrow?</span>
                            <!-- if notification -->
                            <div
                                class="notification-count rounded-xl bg-orange-400 text-white w-3 h-3 flex justify-center items-center"
                            >
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Chat Component -->
        <div class="chat-container w-2/3 bg-orange-300"></div>
    </div>
</template>

<style scoped>
.nav-container {
    li {
        margin-left: 12px;
    }
    .navigation {
        li {
            margin-left: 24px;

            &.active {
                color: rgb(6, 182, 212);
            }
        }
    }
}

.chat-page {
    .conversation {
        .last-message {
            font-size: 12px;
        }
        .notification-count {
            font-size: 10px;
        }
    }
}
</style>
