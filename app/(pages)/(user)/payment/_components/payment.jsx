'use client';
import { useState } from 'react';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

function PaymentFee({ type, due, user }) {
	const [name, setName] = useState(user?.fullName);
	const [email, setEmail] = useState(user?.email);
	const [amount, setAmount] = useState(due);
	const [currency, setCurrency] = useState('INR');
	const [loading, setLoading] = useState(false);
	// const { user } = useSelector((state) => state.user);
	const createOrderId = async () => {
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/payment`,
				{
					amount: parseFloat(amount) * 100,
				}
			);
			console.log('response', response);
			if (response.status !== 200) {
				toast.error('Network response was not ok');
				throw new Error('Network response was not ok');
			}

			const data = response.data;
			console.log('data', data);
			return data.orderId;
		} catch (error) {
			console.error(
				'There was a problem with your fetch operation:',
				error
			);
			toast.error('There was a problem with your fetch operation');
		}
	};
	const processPayment = async (e) => {
		e.preventDefault();
		try {
			const orderId = await createOrderId();
			const options = {
				key: 'rzp_test_7upJB5xBoSTNcx',
				amount: parseFloat(amount) * 100,
				currency: currency,
				name: 'HMS',
				description: 'Hostel Management System',
				order_id: orderId,
				handler: async function (response) {
					const data = {
						orderCreationId: orderId,
						razorpayPaymentId: response.razorpay_payment_id,
						razorpayOrderId: response.razorpay_order_id,
						razorpaySignature: response.razorpay_signature,
					};

					const result = await axios.post(
						`${process.env.NEXT_PUBLIC_API_URL}/payment_verify`,
						data
					);
					const res = result.data;
					console.log('res', res);
					if (res.isOk) {
						toast.success(res.message);
						const responseOk = await axios.post(
							`${process.env.NEXT_PUBLIC_API_URL}/payment/${user.id}`,
							{
								studentId: user.id,
								fullName: name,
								email: email,
								phone: user.phone,
								amount: parseFloat(amount),
								paymentId: response.razorpay_payment_id,
								orderId: response.razorpay_order_id,
								paymentStatus: 'success',
								payedFor: type,
								isPaid: true,
							}
						);
						console.log('responseOk', responseOk);
					} else {
						toast.error(res.message);
					}
				},
				prefill: {
					name: name,
					email: email,
				},
				theme: {
					color: '#3399cc',
				},
			};
			const paymentObject = new window.Razorpay(options);
			paymentObject.on('payment.failed', function (response) {
				toast.error(response.error.description);
			});
			paymentObject.open();
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	return (
		<>
			<Script
				id="razorpay-checkout-js"
				src="https://checkout.razorpay.com/v1/checkout.js"
			/>

			{/* <section className=" flex flex-col gap-6 h-14 mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] items-center pt-36 "> */}
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline">
						{type === 'hostel' ? 'Pay Hostel Fee' : 'Pay Mess Fee'}
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>
							{type === 'hostel'
								? 'Pay Hostel Fee'
								: 'Pay Mess Fee'}
						</DialogTitle>
						<DialogDescription>
							Make changes to your profile information here. Click
							save when you are done.
						</DialogDescription>
						<form
							className="flex flex-col gap-6 w-full sm:w-80"
							onSubmit={processPayment}
						>
							<div className="space-y-1">
								<Label>Full name</Label>
								<Input
									type="text"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="space-y-1">
								<Label>Email</Label>
								<Input
									type="email"
									placeholder="user@gmail.com"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="space-y-1">
								<Label>Amount</Label>
								<div className="flex gap-2">
									<Input
										type="number"
										step="1"
										min={5}
										required
										disabled={true}
										value={amount}
										onChange={(e) =>
											setAmount(e.target.value)
										}
									/>
								</div>
							</div>

							<Button type="submit">Pay</Button>
						</form>
					</DialogHeader>
				</DialogContent>
			</Dialog>
			{/* </section> */}
		</>
	);
}

export default PaymentFee;
