let _name = $state('');

const name = $derived(_name);

export function nameFacade() {
	return {
		name,
		setname: (name: string) => {
			_name = name;
		}
	};
}
