"use client";

import { Box, Button, Card, Center, Group, Stack, Text } from "@mantine/core";
import { Dropzone, FileWithPath } from "@mantine/dropzone";

export default function HomePage() {
  return (
    <Center my="xl">
      <Stack>
        <Text>
          This custom Dropzone component only opens the gallery on Android 14 +
          latest Chrome (behind https, works in localhost and in other browsers)
        </Text>
        <Dropzone
          onDrop={function (files: FileWithPath[]): void {
            throw new Error("Function not implemented.");
          }}
        >
          <Button>Upload</Button>
        </Dropzone>
        <Text>
          The native file input element opens a selection of camera, video and
          gallery which is preferred
        </Text>
        <Dropzone
          onDrop={function (files: FileWithPath[]): void {
            throw new Error("Function not implemented.");
          }}
          // Remove styles from the native input
          inputProps={{
            style: undefined,
          }}
        ></Dropzone>
      </Stack>
    </Center>
  );
}
