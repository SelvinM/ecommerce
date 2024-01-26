import { useGetConfigQuery } from "../../libs/graphql/operations/config.graphql";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import getCurrentLocale from "../../utils/getCurrentLocale";
import { useRouter } from "next/router";
import { getRgbDataUrl } from "../../utils/getRgbDataUrl";
interface Props {}

const HomeBanner: FunctionComponent<Props> = ({}) => {
	const { locale } = useRouter();
	const { data } = useGetConfigQuery({
		variables: { locale: getCurrentLocale(locale) },
	});
	return (
		<div className="relative xs:rounded-md overflow-hidden dark:opacity-80">
			<Link
				href={data?.getConfig?.homeBanner.href || "/"}
				as={data?.getConfig?.homeBanner.as || undefined}
			>
				<a>
					{data?.getConfig?.homeBanner.imageUrl && (
						<Image
							src={`${process.env.NEXT_PUBLIC_BUCKET_URL}${data?.getConfig?.homeBanner.imageUrl}`}
							alt={data?.getConfig?.homeBanner.title || ""}
							sizes="	(min-width: 1024px) 1024px,
									(min-width: 1280px) 1536px,
									768px"
							width={1800}
							height={650}
							placeholder="blur"
							objectFit="contain"
							blurDataURL={
								data.getConfig.homeBanner.imagePlaceholder ||
								getRgbDataUrl([29, 27, 74])
							}
							quality={85}
						/>
					)}
					<div className="absolute group max-h-32 sm:max-h-full top-0 right-0 w-full text-primary-500 h-full text-center">
						{data?.getConfig && (
							<div className="p-4 sm:p-8 lg:p-12 ">
								<div className="flex justify-between flex-col h-10 sm:h-14 md:h-16 lg:h-24">
									<h1 className="text-sm sm:text-sm md:text-xl lg:text-2xl xl:text-4xl title  dark:text-primary-500">
										{data?.getConfig?.homeBanner.title}
									</h1>
									<p className="text-sm sm:text-sm md:text-xl lg:text-2xl xl:text-4xl title  dark:text-primary-500">
										{data?.getConfig?.homeBanner.message}
									</p>
								</div>
								<div className="lg:mb-10 invisible xs:visible pt-6 sm:pt-8 lg:pt-12 xl:pt-24">
									<span className="px-2 font-medium py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 text-2xs leading-none sm:text-sm md:text-base lg:text-lg rounded-full border-primary-500 border sm:border-2 inline-block bg-gradient-to-br transition-colors duration-200 group-hover:text-white group-hover:from-secondary-500 group-hover:to-primary-500">
										{data?.getConfig?.homeBanner.buttonLabel}
									</span>
								</div>
							</div>
						)}
					</div>
				</a>
			</Link>
		</div>
	);
};

export default HomeBanner;
