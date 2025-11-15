let _path = $state('');

export function pathFacade() {
	return {
		get path() {
			return _path;
		},
		set path(path: string) {
			_path = path;
		}
	};
}
