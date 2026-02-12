frappe.pages['order_management'].on_page_load = function(wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Order Management',
		single_column: true
	});

	const main_section = $(wrapper).find('.layout-main-section');
	main_section.empty().append('<div id="app"></div>');

	const is_local_host = ['localhost', '127.0.0.1'].includes(window.location.hostname);
	const is_developer_mode = Boolean(frappe.boot && frappe.boot.developer_mode);
	const should_use_vite_dev = is_local_host && is_developer_mode;

	const append_script_once = (selector, attrs, on_error) => {
		if (document.querySelector(selector)) return false;
		const script = document.createElement('script');
		Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value));
		if (typeof on_error === 'function') {
			script.onerror = on_error;
		}
		document.head.appendChild(script);
		return true;
	};

	const css_path = '/assets/lucrum_order_management/js/vue_app/index.css';
	const js_path = '/assets/lucrum_order_management/js/vue_app/index.js';

	const load_production_bundle = () => {
		if (typeof frappe.require === 'function') {
			frappe.require([css_path, js_path]);
			return;
		}

		if (!document.querySelector('script[data-order-management-vue-prod]')) {
			const script = document.createElement('script');
			script.src = js_path;
			script.defer = true;
			script.dataset.orderManagementVueProd = '1';
			document.body.appendChild(script);
		}
	};

	if (should_use_vite_dev) {
		append_script_once('script[data-order-management-vite-client]', {
			type: 'module',
			src: 'http://localhost:8080/@vite/client',
			'data-order-management-vite-client': '1'
		});
		append_script_once('script[data-order-management-vite-main]', {
			type: 'module',
			src: 'http://localhost:8080/src/main.js',
			'data-order-management-vite-main': '1'
		}, load_production_bundle);
		return;
	}

	load_production_bundle();

};
