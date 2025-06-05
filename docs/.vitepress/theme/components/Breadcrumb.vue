<template>
	<div style="padding:10px 0">
		<n-breadcrumb>
			<n-breadcrumb-item v-for="(item, index) in items" :key="index" :href="item.link">
				<span>{{ item.linkText }}</span>
			</n-breadcrumb-item>
		</n-breadcrumb>
	</div>
</template>
<script setup lang="ts">
import { NBreadcrumb, NBreadcrumbItem } from "naive-ui";
import { useData } from "vitepress";
const { page } = useData();
import { computed } from "vue";

// 使用 computed 来确保数据动态更新
const items = computed(() => {
	// 添加默认值防止 breadcrumb 未定义
	const pathSegs = page.value.frontmatter?.breadcrumb || [];

	console.log("Breadcrumb data:", pathSegs); // 打印 breadcrumb 数据以供调试

	return pathSegs.map((item) => {
		console.log("Processing item:", item);
		return {
			linkText: item[0].linkText,
			link: item[0].link
		};
	});
});
console.log("Computed items:", items.value);
</script>
<style>
#breadcrumb {
	margin-bottom: 15px;
	font-size: 15px;
	color: var(--vp-c-text-2);
}

.bc-items::after {
	content: "/";
	margin: 0 8px;
	vertical-align: top;
	font-weight: bold;
	font-size: 10px;
	color: var(--vp-c-text-3);
}
</style>