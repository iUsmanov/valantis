import { InputHTMLAttributes, memo } from 'react';
import cls from './Checkbox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'size'>;
type InputSize = 's' | 'm' | 'l';

interface CheckboxProps extends HTMLInputProps {
	className?: string;
	size?: InputSize;
	label: string;
	value: boolean;
	onChange: VoidFunction;
}

export const Checkbox = memo((props: CheckboxProps) => {
	const { className, size = 'm', label, onChange, value } = props;
	return (
		<div className={classNames(cls.checkbox, {}, [className, cls[`size-${size}`]])}>
			<label htmlFor=''>
				{label}
				<input
					className={cls.input}
					type='checkbox'
					name=''
					id=''
					checked={value}
					onChange={onChange}
				/>
			</label>
		</div>
	);
});
