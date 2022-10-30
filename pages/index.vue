<template>
    <div>
        <div class="border px-4">
            ssssswww
        </div>
        <span>jjsfs是ssssgs</span>
        <Button type="primary" size="large">
            <template #icon>
                <DownloadOutlined />
            </template>
        </Button>
        <NuxtLink to="/child">Child</NuxtLink>
    </div>
</template>
<script setup>
import { Button } from 'ant-design-vue'
import { DownloadOutlined } from '@ant-design/icons-vue'
</script>
