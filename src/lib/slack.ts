/**
 * Slack Webhook helper for sending form submissions to a Slack channel.
 *
 * Required env var:
 *   SLACK_WEBHOOK_URL — Incoming webhook URL from Slack app settings
 *
 * Create webhook at: https://api.slack.com/messaging/webhooks
 */

export interface SlackField {
  title: string;
  value: string;
  short?: boolean;
}

export interface SlackAttachment {
  color?: string;
  pretext?: string;
  title?: string;
  text?: string;
  fields?: SlackField[];
  footer?: string;
  ts?: number;
}

export interface SlackMessage {
  text?: string;
  attachments?: SlackAttachment[];
}

/**
 * Send a message to Slack via webhook
 */
export async function sendSlackMessage(webhookUrl: string, message: SlackMessage) {
  if (!webhookUrl) {
    throw new Error('SLACK_WEBHOOK_URL is not set');
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Slack webhook failed ${response.status}: ${errorText.slice(0, 500)}`
    );
  }

  return response.text();
}
