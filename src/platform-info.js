import { call as api_call, subscribe as api_subscribe } from './api';

export function get_platform_info() {
    return api_call("platform-info/get", {});
}

export function platform_info_test() {
    return api_call("platform-info/get", {});
}
