CREATE TABLE `android_testers` (
	`id` text PRIMARY KEY NOT NULL,
	`full_name` text NOT NULL,
	`google_play_email` text NOT NULL,
	`country` text NOT NULL,
	`testing_interest` text NOT NULL,
	`android_device` text,
	`consent` integer DEFAULT true NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_android_testers_google_play_email` ON `android_testers` (`google_play_email`);--> statement-breakpoint
CREATE INDEX `idx_android_testers_created_at` ON `android_testers` (`created_at`);