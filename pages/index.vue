<template>
    <div>
        <div class="border px-4">
            ssssswww
        </div>
        <span>jjsfsttttttttttttttttttttttttsgs</span>
        <Button type="primary" size="large">
            <template #icon>
                <DownloadOutlined />
            </template>
        </Button>
        <br />
        <NuxtLink to="/child">Child</NuxtLink>
    </div>
</template>
<script setup>
import { Button } from 'ant-design-vue'
import { DownloadOutlined } from '@ant-design/icons-vue'
</script>
