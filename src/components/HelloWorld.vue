<script setup>
</script>

<template>
    <div>
        <!-- <font-awesome-icon :icon="['fas', 'sms']" /> -->
    </div>

    <!-- Navigation Header Component -->
    <div class="nav-container flex justify-between bg-slate-100">
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
    <div class="chat-page flex h-full text-sm">

        <!-- MiniConversation Component -->
        <div class="mini-conversation-container w-1/3 bg-slate-400">

            <!-- Search Component -->
            <div class="search relative m-4">
                <input
                    type="text"
                    class="bg-blue rounded-xl w-full h-full px-4 py-2 pl-7 focus:outline-none"
                    placeholder="Search"
                />
                <font-awesome-icon
                    class="text-slate-500 absolute top-0 left-2 h-full"
                    :icon="['fas', 'sms']"
                />
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
</style>
